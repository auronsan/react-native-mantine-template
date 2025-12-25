import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, View, Alert } from 'react-native';
import { useState } from 'react';
import { Theme, Button, Stack, Text, Title, Badge } from 'react-native-mantine';

export default function App() {
  const [clickCount, setClickCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSimpleClick = () => {
    setClickCount((prev) => prev + 1);
    Alert.alert('Success', 'Button clicked!');
  };

  const handleAsyncClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setClickCount((prev) => prev + 1);
      Alert.alert('Success', 'Async operation completed!');
    }, 2000);
  };

  return (
    <Theme>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <StatusBar style="auto" />

          <Title order={1} style={styles.title}>
            React Native Mantine
          </Title>

          <Text style={styles.subtitle}>
            A beautiful React Native component library
          </Text>

          {/* Button Variants Section */}
          <View style={styles.section}>
            <Title order={3} style={styles.sectionTitle}>
              Button Variants
            </Title>
            <Stack spacing={12}>
              <Button variant="filled" onPress={handleSimpleClick}>
                Filled Button
              </Button>
              <Button variant="outline" onPress={handleSimpleClick}>
                Outline Button
              </Button>
              <Button variant="light" onPress={handleSimpleClick}>
                Light Button
              </Button>
              <Button variant="subtle" onPress={handleSimpleClick}>
                Subtle Button
              </Button>
            </Stack>
          </View>

          {/* Button Sizes Section */}
          <View style={styles.section}>
            <Title order={3} style={styles.sectionTitle}>
              Button Sizes
            </Title>
            <Stack spacing={10}>
              <Button size="xs" onPress={handleSimpleClick}>
                Extra Small
              </Button>
              <Button size="sm" onPress={handleSimpleClick}>
                Small
              </Button>
              <Button size="md" onPress={handleSimpleClick}>
                Medium (Default)
              </Button>
              <Button size="lg" onPress={handleSimpleClick}>
                Large
              </Button>
              <Button size="xl" onPress={handleSimpleClick}>
                Extra Large
              </Button>
            </Stack>
          </View>

          {/* Button Colors Section */}
          <View style={styles.section}>
            <Title order={3} style={styles.sectionTitle}>
              Button Colors
            </Title>
            <Stack spacing={10}>
              <Button color="blue" onPress={handleSimpleClick}>
                Blue
              </Button>
              <Button color="red" onPress={handleSimpleClick}>
                Red
              </Button>
              <Button color="green" onPress={handleSimpleClick}>
                Green
              </Button>
              <Button color="orange" onPress={handleSimpleClick}>
                Orange
              </Button>
              <Button color="grape" onPress={handleSimpleClick}>
                Grape
              </Button>
            </Stack>
          </View>

          {/* Interactive Example Section */}
          <View style={styles.section}>
            <Title order={3} style={styles.sectionTitle}>
              Interactive Example
            </Title>
            <Stack spacing={12}>
              <Button loading={loading} onPress={handleAsyncClick}>
                {loading ? 'Processing...' : 'Async Button'}
              </Button>
              {clickCount > 0 && (
                <View style={styles.badgeContainer}>
                  <Badge size="lg" color="blue">
                    Total Clicks: {clickCount}
                  </Badge>
                </View>
              )}
            </Stack>
          </View>

          {/* Other States Section */}
          <View style={styles.section}>
            <Title order={3} style={styles.sectionTitle}>
              Other States
            </Title>
            <Stack spacing={10}>
              <Button disabled>Disabled Button</Button>
              <Button fullWidth onPress={handleSimpleClick}>
                Full Width Button
              </Button>
            </Stack>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>
              Built with React Native Mantine
            </Text>
          </View>
        </View>
      </ScrollView>
    </Theme>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 32,
    fontSize: 16,
    color: '#868e96',
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    marginBottom: 16,
  },
  badgeContainer: {
    alignItems: 'center',
  },
  footer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#868e96',
    fontSize: 14,
  },
});
