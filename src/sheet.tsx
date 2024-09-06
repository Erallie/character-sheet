import { StrictMode } from "react";
import { App, ItemView, WorkspaceLeaf, View } from "obsidian";
import { Root, createRoot } from "react-dom/client";
import type CharacterSheet from 'main';

interface ContainerProps {
    view: View;
    plugin: CharacterSheet;
    app: App;
}

export const VIEW_TYPE_SHEET = 'sheet-view';

export class SheetView extends ItemView {
    root: Root | null = null;
    plugin: CharacterSheet;
    app: App;

    constructor(leaf: WorkspaceLeaf, plugin: CharacterSheet, app: App) {
        super(leaf);
        this.plugin = plugin;
        this.app = app;
    }

    getViewType() {
        return VIEW_TYPE_SHEET;
    }

    getDisplayText() {
        return "Character sheet";
    }

    async onOpen() {
        this.root = createRoot(this.containerEl.children[1]);
        this.icon = 'lucide-user-pen';
        this.root.render(
            <StrictMode>
                <SheetContainer view={this} plugin={this.plugin} app={this.app} />
            </StrictMode>
        );
    }

    async onClose() {
        this.root?.unmount();
    }

}

const SheetContainer = ({ view, plugin, app }: ContainerProps) => {

    return (
        <div id="page-1">
            <div id="character-basics">
                <input id="character-name" type="text"></input>
                <div className='joined-inputs'>
                    <input id="class" type="text"></input>
                    <input id="level" type="number"></input>
                </div>
                <input id="background" type="text"></input>
                <input id="player-name" type="text"></input>
                <input id="race" type="text"></input>
                <select name="alignment" id="alignment">
                    <option value="LG">Lawful good</option>
                    <option value="NG">Neutral good</option>
                    <option value="CG">Chaotic good</option>
                    <option value="LN">Lawful neutral</option>
                    <option value="N">True neutral</option>
                    <option value="CN">Chaotic neutral</option>
                    <option value="LE">Lawful evil</option>
                    <option value="NE">Neutral evil</option>
                    <option value="CE">Chaotic evil</option>
                </select>
                <input id="xp-points" type="number"></input>
            </div>
            <div id="ability-scores">
                <div id="strength-ability">
                    <label>Strength</label>
                    <input id="strength-score" type="number"></input>
                    <input id="strength-modifier" type="number"></input>
                </div>
                <div id="dexterity-ability">
                    <label>Dexterity</label>
                    <input id="dexterity-score" type="number"></input>
                    <input id="dexterity-modifier" type="number"></input>
                </div>
                <div id="constitution-ability">
                    <label>Constitution</label>
                    <input id="constitution-score" type="number"></input>
                    <input id="constitution-modifier" type="number"></input>
                </div>
                <div id="intelligence-ability">
                    <label>Intelligence</label>
                    <input id="intelligence-score" type="number"></input>
                    <input id="intelligence-modifier" type="number"></input>
                </div>
                <div id="wisdom-ability">
                    <label>Wisdom</label>
                    <input id="wisdom-score" type="number"></input>
                    <input id="wisdom-modifier" type="number"></input>
                </div>
                <div id="charisma-ability">
                    <label>Charisma</label>
                    <input id="charisma-score" type="number"></input>
                    <input id="charisma-modifier" type="number"></input>
                </div>
            </div>
            <div id="bonuses">
                <input id="inspiration" type="checkbox"></input>
                <input id="proficiency-bonus" type="number"></input>
                <div id="saving-throws">
                    <div id="strength-save">
                        <input id="strength-save-proficiency" type="checkbox"></input>
                        <input id="strength-save-modifier" type='number'></input>
                        <label>Strength</label>
                    </div>
                    <div id="dexterity-save">
                        <input id="dexterity-save-proficiency" type="checkbox"></input>
                        <input id="dexterity-save-modifier" type='number'></input>
                        <label>Dexterity</label>
                    </div>
                    <div id="constitution-save">
                        <input id="constitution-save-proficiency" type="checkbox"></input>
                        <input id="constitution-save-modifier" type='number'></input>
                        <label>Constitution</label>
                    </div>
                    <div id="intelligence-save">
                        <input id="intelligence-save-proficiency" type="checkbox"></input>
                        <input id="intelligence-save-modifier" type='number'></input>
                        <label>Intelligence</label>
                    </div>
                    <div id="wisdom-save">
                        <input id="wisdom-save-proficiency" type="checkbox"></input>
                        <input id="wisdom-save-modifier" type='number'></input>
                        <label>Wisdom</label>
                    </div>
                    <div id="charisma-save">
                        <input id="charisma-save-proficiency" type="checkbox"></input>
                        <input id="charisma-save-modifier" type='number'></input>
                        <label>Charisma</label>
                    </div>
                </div>
                <div id="skills">
                    <div id="acrobatics">
                        <input id="strength-save-proficiency" type="checkbox"></input>
                        <input id="strength-save-modifier" type='number'></input>
                        <label>Acrobatics <span className="base-modifier">(Dex)</span></label>
                    </div>
                    <div id="animal-handling">
                        <input id="animal-handling-proficiency" type="checkbox"></input>
                        <input id="animal-handling-modifier" type='number'></input>
                        <label>Animal handling <span className="base-modifier">(Wis)</span></label>
                    </div>
                    <div id="arcana">
                        <input id="arcana-proficiency" type="checkbox"></input>
                        <input id="arcana-modifier" type='number'></input>
                        <label>Arcana <span className="base-modifier">(Int)</span></label>
                    </div>
                    <div id="athletics">
                        <input id="athletics-proficiency" type="checkbox"></input>
                        <input id="athletics-modifier" type='number'></input>
                        <label>Athletics <span className="base-modifier">(Str)</span></label>
                    </div>
                    <div id="deception">
                        <input id="deception-proficiency" type="checkbox"></input>
                        <input id="deception-modifier" type='number'></input>
                        <label>Deception <span className="base-modifier">(Cha)</span></label>
                    </div>
                    <div id="history">
                        <input id="history-proficiency" type="checkbox"></input>
                        <input id="history-modifier" type='number'></input>
                        <label>History <span className="base-modifier">(Int)</span></label>
                    </div>
                    <div id="insight">
                        <input id="insight-proficiency" type="checkbox"></input>
                        <input id="insight-modifier" type='number'></input>
                        <label>Insight <span className="base-modifier">(Wis)</span></label>
                    </div>
                    <div id="intimidation">
                        <input id="intimidation-proficiency" type="checkbox"></input>
                        <input id="intimidation-modifier" type='number'></input>
                        <label>Intimidation <span className="base-modifier">(Cha)</span></label>
                    </div>
                    <div id="investigation">
                        <input id="investigation-proficiency" type="checkbox"></input>
                        <input id="investigation-modifier" type='number'></input>
                        <label>Investigation <span className="base-modifier">(Int)</span></label>
                    </div>
                    <div id="medicine">
                        <input id="medicine-proficiency" type="checkbox"></input>
                        <input id="medicine-modifier" type='number'></input>
                        <label>Medicine <span className="base-modifier">(Wis)</span></label>
                    </div>
                    <div id="nature">
                        <input id="nature-proficiency" type="checkbox"></input>
                        <input id="nature-modifier" type='number'></input>
                        <label>Nature <span className="base-modifier">(Int)</span></label>
                    </div>
                    <div id="perception">
                        <input id="perception-proficiency" type="checkbox"></input>
                        <input id="perception-modifier" type='number'></input>
                        <label>Perception <span className="base-modifier">(Wis)</span></label>
                    </div>
                    <div id="performance">
                        <input id="performance-proficiency" type="checkbox"></input>
                        <input id="performance-modifier" type='number'></input>
                        <label>Performance <span className="base-modifier">(Cha)</span></label>
                    </div>
                    <div id="persuasion">
                        <input id="persuasion-proficiency" type="checkbox"></input>
                        <input id="persuasion-modifier" type='number'></input>
                        <label>Persuasion <span className="base-modifier">(Cha)</span></label>
                    </div>
                    <div id="religion">
                        <input id="religion-proficiency" type="checkbox"></input>
                        <input id="religion-modifier" type='number'></input>
                        <label>Religion <span className="base-modifier">(Cha)</span></label>
                    </div>
                    <div id="sleight-of-hand">
                        <input id="religion-proficiency" type="checkbox"></input>
                        <input id="religion-modifier" type='number'></input>
                        <label>Religion <span className="base-modifier">(Cha)</span></label>
                    </div>
                </div>

            </div>
        </div>
    );
}