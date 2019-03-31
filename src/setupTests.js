/*This file execute before any test. Separate this code make it simpler.E
* */
import Enzyme from "enzyme/build";
import EnzymeAdapter from "enzyme-adapter-react-16/build";

Enzyme.configure({ adapter: new EnzymeAdapter() });