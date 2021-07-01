import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList, Button } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  
  const addGoal = goalTitle => {
    if (goalTitle.length < 1) {
      alert('please add some value');
    } else {
      setCourseGoals(currentGoals => [...currentGoals,
        {id: Math.random().toString(), value: goalTitle}
      ]);
      setIsAddMode(false);
    }
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  }

  return (
    <SafeAreaView>
        <View style={styles.screen}>
          <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
          <GoalInput onAddGoal={addGoal} isModalOpen={isAddMode} />
          <FlatList 
            keyExtractor={(item, index) => item.id}
            data={courseGoals} 
            renderItem={itemData => (
            <GoalItem
              id={itemData.item.id}
              title={itemData.item.value} 
              onDelete={removeGoalHandler}/>
          )} />
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 40
  }
});
export default App;