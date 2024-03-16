import type { Meta, StoryObj } from '@storybook/vue3'
import SelectMock from '../../components/selectMock/SelectMockContainer.vue'
import SelectMockWrapper from './SelectMockWrapper.vue'
import { groupMockDebugsMock } from '@mocks'

const meta = {
  title: 'SelectMock',
  component: SelectMock
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ['autodocs'],
} satisfies Meta<typeof SelectMock>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => ({
    components: { SelectMockWrapper, SelectMock },
    template: `
      <SelectMockWrapper>
        <SelectMock :mock-debug-list="groupMockDebugsMock"/>
      </SelectMockWrapper>
    `,
    computed: {
      groupMockDebugsMock() {
        return groupMockDebugsMock
      }
    }
  })
}
