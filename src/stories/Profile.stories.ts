import { IonicModule } from '@ionic/angular';
import { ProfileComponent } from './../app/shared/profile/profile.component';
// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import { moduleMetadata } from '@storybook/angular';

export default {
  title: 'Ionic/ProfileComponent',
  component: ProfileComponent,
  argTypes: {},
  decorators: [
    moduleMetadata({
      declarations: [ProfileComponent],
      imports: [IonicModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story<ProfileComponent> = (args: ProfileComponent) => ({
  props: args,
});

export const Primary = Template.bind({});
Primary.args = {};
