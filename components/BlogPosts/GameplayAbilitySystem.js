"use client";
import { useRef } from "react";
import image_Hero from "../../public/GAS_Diagram_Cropped.png";
import useOnScreen from "../../hooks/useScreenObserver";
import { faCrosshairs } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SidebarHashLink } from "../SidebarHashLink";
import DA_InputConfig from "../../public/DA_InputConfig.png";
import DA_KnifeAbilitySet from "../../public/DA_KnifeAbilitySet.png";
import { BSCodeBlock, BSInlineCodeBlock, BSInlineEnum, BSInlineFunction } from "../CodeBlock";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BlogHeadingClass, BlogHeading } from "./BlogComponents/BlogHeading";
import { BlueprintGraph } from "./BlogComponents/BlueprintGraph";
import Sidebar from "../Sidebar";

const GameplayAbilitySystem = () => {
  const articlePath = "/devblog/gameplay-ability-system-overview";

  const Ref_gasSc = useRef(null);
  const Ref_gasSc_asc = useRef(null);
  const Ref_gasSc_ga = useRef(null);
  const Ref_gasSc_ga_fireGun = useRef(null);
  const Ref_gasSc_ga_trackGun = useRef(null);
  const Ref_gasSc_asb = useRef(null);
  const Ref_ge = useRef(null);
  const Ref_ge_tarImm = useRef(null);
  const Ref_ge_fireCD = useRef(null);
  const Ref_ac = useRef(null);
  const Ref_ac_as = useRef(null);
  const Ref_ac_eic = useRef(null);
  const Ref_ac_eic_ic = useRef(null);
  const Ref_ac_dec = useRef(null);
  const Ref_ac_hc = useRef(null);
  const Ref_tl = useRef(null);
  const Ref_tl_input = useRef(null);
  const Ref_tl_aa = useRef(null);
  const Ref_tl_aa_st = useRef(null);
  const Ref_tl_aa_otdrc = useRef(null);
  const Ref_tl_aa_otdr = useRef(null);
  const Ref_tl_gc = useRef(null);
  const Ref_tl_gc_wf = useRef(null);
  const Ref_tl_geApp = useRef(null);
  const Ref_tl_geApp_agets = useRef(null);
  const Ref_tl_geExec = useRef(null);
  const Ref_tl_geApp_ege = useRef(null);

  const onScreen_gasSc = useOnScreen(Ref_gasSc);
  const onScreen_gasSc_asc = useOnScreen(Ref_gasSc_asc);
  const onScreen_gasSc_ga = useOnScreen(Ref_gasSc_ga);
  const onScreen_gasSc_ga_fireGun = useOnScreen(Ref_gasSc_ga_fireGun);
  const onScreen_gasSc_ga_trackGun = useOnScreen(Ref_gasSc_ga_trackGun);
  const onScreen_gasSc_asb = useOnScreen(Ref_gasSc_asb);
  const onScreen_ge = useOnScreen(Ref_ge);
  const onScreen_ac = useOnScreen(Ref_ac);
  const onScreen_ac_as = useOnScreen(Ref_ac_as);
  const onScreen_ac_eic = useOnScreen(Ref_ac_eic);
  const onScreen_ac_eic_ic = useOnScreen(Ref_ac_eic_ic);
  const onScreen_ac_dec = useOnScreen(Ref_ac_dec);
  const onScreen_ac_hc = useOnScreen(Ref_ac_hc);
  const onScreen_tl = useOnScreen(Ref_tl);
  const onScreen_tl_input = useOnScreen(Ref_tl_input);
  const onScreen_tl_aa = useOnScreen(Ref_tl_aa);
  const onScreen_tl_aa_st = useOnScreen(Ref_tl_aa_st);
  const onScreen_tl_aa_otdrc = useOnScreen(Ref_tl_aa_otdrc);
  const onScreen_tl_aa_otdr = useOnScreen(Ref_tl_aa_otdr);
  const onScreen_tl_gc = useOnScreen(Ref_tl_gc);
  const onScreen_tl_gc_wf = useOnScreen(Ref_tl_gc_wf);
  const onScreen_ge_tarImm = useOnScreen(Ref_ge_tarImm);
  const onScreen_ge_fireCD = useOnScreen(Ref_ge_fireCD);
  const onScreen_tl_geApp = useOnScreen(Ref_tl_geApp);
  const onScreen_tl_geApp_agets = useOnScreen(Ref_tl_geApp_agets);
  const onScreen_tl_geApp_ege = useOnScreen(Ref_tl_geApp_ege);
  const onScreen_tl_geExec = useOnScreen(Ref_tl_geExec);

  return (
    <>
      <div className="flex-container-column">
        <div className="hero-container">
          <div className="hero">
            <h1>An Overview of Unreal&#39;s Gameplay Ability System in BeatShot</h1>
            <p className="hero-lead">
              Why is the Gameplay Ability System used in BeatShot? This article explains the role of GAS and provides a walkthrough of a
              common ability.
            </p>
            <Image className="hero-image" priority src={image_Hero} quality={100} alt="logo" />
          </div>
        </div>
        <div className="flex-container-row">
          <Sidebar>
            <ul>
              <li>
                <SidebarHashLink hash={`#gas-subclasses`} text="GAS Subclasses" onScreen={onScreen_gasSc} topLevelLink={true} />
                <ul>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UAbilitySystemComponent`}
                      text="Ability System Component"
                      onScreen={onScreen_gasSc && onScreen_gasSc_asc}
                    />
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UGameplayAbility`}
                      text="Gameplay Abilities"
                      onScreen={onScreen_gasSc && !onScreen_gasSc_asc && onScreen_gasSc_ga}
                    />
                    <li>
                      <SidebarHashLink
                        hash={`#classes-UBSAttributeSetBase`}
                        text="Attribute Set"
                        onScreen={!onScreen_gasSc_ga && onScreen_gasSc_asb}
                      />
                    </li>
                  </li>
                </ul>
              </li>
              <li>
                <SidebarHashLink
                  hash={`#gameplay-effects`}
                  text="Gameplay Effects"
                  onScreen={!onScreen_gasSc && onScreen_ge}
                  topLevelLink={true}
                />
                <ul>
                  <li>
                    <SidebarHashLink
                      hash={`#ge-infinite`}
                      text="Target Immunity"
                      onScreen={!onScreen_gasSc && onScreen_ge && onScreen_ge_tarImm}
                    />
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#fire-cooldown`}
                      text="Fire Gun Cooldown"
                      onScreen={!onScreen_gasSc && onScreen_ge && !onScreen_ge_tarImm && onScreen_ge_fireCD}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <SidebarHashLink
                  hash={`#additional-classes`}
                  text="Additional Classes"
                  onScreen={!onScreen_ge && onScreen_ac}
                  topLevelLink={true}
                />
                <ul>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UBSInputComponent`}
                      text="Enhanced Input Component"
                      onScreen={!onScreen_ge && onScreen_ac && onScreen_ac_eic}
                    />
                    <ul>
                      <li>
                        <SidebarHashLink
                          hash={`#classes-UBSInputConfig`}
                          text="Input Config"
                          onScreen={!onScreen_ge && onScreen_ac && onScreen_ac_eic && onScreen_ac_eic_ic}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UBSAbilitySet`}
                      text="Ability Set"
                      onScreen={!onScreen_ge && onScreen_ac && !onScreen_ac_eic && onScreen_ac_as}
                    />
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UBSDamageExecCalc`}
                      text="Damage Exec Calc"
                      onScreen={onScreen_ac && !onScreen_ac_eic && !onScreen_ac_as && onScreen_ac_dec}
                    />
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#classes-UBSHealthComponent`}
                      text="Health Component"
                      onScreen={onScreen_ac && !onScreen_ac_dec && onScreen_ac_hc}
                    />
                  </li>
                </ul>
              </li>
              <li>
                <SidebarHashLink hash={`#timeline`} text="Timeline" onScreen={!onScreen_ac && onScreen_tl} topLevelLink={true} />
                <ul>
                  <li>
                    <SidebarHashLink hash={`#timeline-Input`} text="Input" onScreen={!onScreen_ac && onScreen_tl && onScreen_tl_input} />
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#timeline-AbilityActivation`}
                      text="Ability Activation"
                      onScreen={onScreen_tl && !onScreen_tl_input && onScreen_tl_aa}
                    />
                    <ul>
                      <li>
                        <SidebarHashLink
                          hash={`#timeline-StartTargeting`}
                          text="Start Targeting"
                          onScreen={onScreen_tl && !onScreen_tl_input && onScreen_tl_aa && onScreen_tl_aa_st}
                        />
                      </li>
                      <li>
                        <SidebarHashLink
                          hash={`#timeline-OnTargetDataReadyCallback`}
                          text="On Target Data Ready Callback"
                          onScreen={onScreen_tl && onScreen_tl_aa && !onScreen_tl_aa_st && onScreen_tl_aa_otdrc}
                        />
                      </li>
                      <li>
                        <SidebarHashLink
                          hash={`#timeline-OnTargetDataReady`}
                          text="On Target Data Ready"
                          onScreen={onScreen_tl && onScreen_tl_aa && !onScreen_tl_aa_st && !onScreen_tl_aa_otdrc && onScreen_tl_aa_otdr}
                        />
                      </li>
                    </ul>
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#timeline-ApplyingTheGE`}
                      text="GE Application"
                      onScreen={onScreen_tl && !onScreen_tl_aa && onScreen_tl_geApp}
                    />
                    <ul>
                      <li>
                        <SidebarHashLink
                          hash={`#timeline-ApplyGESpectoSelf`}
                          text="Apply GESpec to Self"
                          onScreen={onScreen_tl && !onScreen_tl_aa && onScreen_tl_geApp && onScreen_tl_geApp_agets}
                        />
                        <ul>
                          <li>
                            <SidebarHashLink
                              hash={`#timeline-ExecuteGameplayEffect`}
                              text="Execute Gameplay Effect"
                              onScreen={
                                onScreen_tl && !onScreen_tl_aa && onScreen_tl_geApp && onScreen_tl_geApp_agets && onScreen_tl_geApp_ege
                              }
                            />
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <SidebarHashLink
                      hash={`#timeline-GameplayCues`}
                      text="Gameplay Cues"
                      onScreen={onScreen_tl && !onScreen_tl_geApp && onScreen_tl_gc}
                    />
                    <ul>
                      <li>
                        <SidebarHashLink
                          hash={`#timeline-GCNWeaponFire`}
                          text="Weapon Fire"
                          onScreen={onScreen_tl && !onScreen_tl_geApp && onScreen_tl_gc && onScreen_tl_gc_wf}
                        />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </Sidebar>
          <article className="flex-container-column" id="article">
            <p>From the Unreal Engine Docs:</p>
            <blockquote className="otro-blockquote">
              The Gameplay Ability System is a framework for building attributes, abilities, and interactions that an Actor can own and
              trigger. The system is designed to be adapted to a wide variety of Gameplay-Driven projects such as Role-Playing Games(RPGs),
              Action-Adventure games, and Multiplayer Online Battle Arenas games(MOBA). Using this system, you can create abilities like a
              single attack, or add more complexity like a spell that triggers many status effects depending on data from the user and the
              targets.
            </blockquote>
            <p>
              It might not sound like the Gameplay Ability System (<span className="inline text-light">GAS</span>) has a reason to be in
              BeatShot. However, the two damage types in BeatShot (hit and tracking) are separate abilities created in the framework.
              Shooting a weapon could have easily been accomplished with <span className="text-light">GAS</span>, and it was that way at
              first. I simply wanted to learn how abilities worked in Unreal, and this article describes how I&#39;ve implemented it along
              with showing what actually happens during the game when you shoot the weapon. I learned much of what I know about{" "}
              <span className="text-light">GAS</span> from this incredible{" "}
              <Link className="link text-light hover-white" href={"https://github.com/tranek/GASDocumentation"}>
                GASDocumentation
              </Link>{" "}
              from the community (its massive). I&#39;m not looking to do the same thing here, but instead show an example implementation
              and execution.
            </p>
            <div className="article-section" ref={Ref_gasSc} id="gas-subclasses">
              <BlogHeading headingText="GAS Subclasses" headingLevel={1} />
              <p>
                Many of the classes that are part of <span className="text-light">GAS</span> are meant to be subclassed in C++. In this
                section, I&#39;ll introduce the most necessary classes that BeatShot overrides.
              </p>
              <div className="article-subsection" ref={Ref_gasSc_asc} id="classes-UAbilitySystemComponent">
                <BlogHeadingClass
                  baseClass="UAbilitySystemComponent"
                  childClass="UBSAbilitySystemComponent"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/BSAbilitySystemComponent.cpp"
                />
                <p>
                  The Ability System Component (<span className="text-light">ASC</span>) is added to any actor that wants to interact with{" "}
                  <span className="text-light">GAS</span>. For BeatShot, the only actors that have <span className="text-light">ASCs</span>{" "}
                  are the character and targets.
                </p>
                <ul>
                  <p>
                    In my implementation, the <span className="text-light">ASC</span> lives in different places depending on the actor:
                  </p>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <span className="text-light">ASCs</span> on targets reside on the actor itself (
                    <BSInlineFunction className={"ATarget"} />
                    ).
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <span className="text-light">ASCs</span> on the character reside in the Player State (
                    <BSInlineFunction className={"ABSPlayerState"} />
                    ).
                  </li>
                </ul>
              </div>
              <div className="article-subsection" ref={Ref_gasSc_ga} id="classes-UGameplayAbility">
                <BlogHeadingClass
                  baseClass="UGameplayAbility"
                  childClass="UBSGameplayAbility"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Abilities/BSGameplayAbility.cpp"
                />
                <p>
                  A Gameplay Ability (<span className="text-light">GA</span>) is an action or skill that an actor can perform in game.
                </p>
                <p>
                  There isn&#39;t much to the base override besides setting up how the ability is supposed to be activated
                  (ActivationPolicy) and interact with other abilities (ActivationGroup).
                </p>
                <div className="article-subsection-2" ref={Ref_gasSc_ga_fireGun} id="classes-UBSGA_FireGun">
                  <BlogHeadingClass
                    baseClass="UBSGameplayAbility"
                    childClass="UBSGA_FireGun"
                    headingLevel={3}
                    childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Abilities/BSGA_FireGun.cpp"
                  />
                  <p>
                    This is the ability for shooting the gun in a game mode that uses Hit-Based Damage. I implemented some of this class in
                    C++ and some in Blueprint. This is the ability used in the{" "}
                    <Link className="link text-light hover-white" href={"#timeline"}>
                      Timeline Section
                    </Link>
                    .
                  </p>
                </div>
                <div className="article-subsection-2" ref={Ref_gasSc_ga_trackGun} id="classes-UBSGA_TrackGun">
                  <BlogHeadingClass
                    baseClass="UBSGameplayAbility"
                    childClass="UBSGA_TrackGun"
                    headingLevel={3}
                    childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Abilities/BSGA_TrackGun.cpp"
                  />
                  <p>
                    This is the ability for dealing damage to targets for a game mode that uses Tracking Damage. I implemented some of this
                    class in C++ and some in Blueprint. Upon activation, it creates an <span className="text-light">Ability Task</span> that
                    does a single line trace on tick using <BSInlineFunction className={"TickTask"} />.
                  </p>
                </div>
                <div className="article-subsection-2" id="classes-UBSGA_AimBot">
                  <BlogHeadingClass
                    baseClass="UBSGameplayAbility"
                    childClass="UBSGA_AimBot"
                    headingLevel={3}
                    childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Abilities/BSGA_AimBot.cpp"
                  />
                  <p>
                    Before BeatShot&#39;s trailer was edited, I knew I needed footage of the game in action but didn&#39;t want to worry
                    about performing well during every footage take since there was a lot to record. This ability was created in response to
                    this. It provides automated aiming to targets and looks decently realistic. It can handle all Hit-Based Damage game
                    modes.
                  </p>
                  <div className="article-subsection-2" id="classes-UBSAT_AimToTarget">
                    <BlogHeadingClass
                      baseClass="UAbilityTask"
                      childClass="UBSAT_AimToTarget"
                      headingLevel={4}
                      childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Tasks/UBSAT_AimToTarget.cpp"
                    />
                    <p>
                      An <span className="text-light">Ability Task</span> can be used to perform a latent action from within a{" "}
                      <span className="text-light">Gameplay Ability</span>. Unreal includes a couple default ones like{" "}
                      <BSInlineFunction functionName={"UAbilityTask_PlayMontageAndWait"} />, which is used pretty much any time an animation
                      needs to be played within a <span className="text-light">GA</span>.
                    </p>
                    <p>
                      The main reason I chose to use an{" "}
                      <span className="text-light">Ability Task</span> for the Aim Bot ability is because it can tick using{" "}
                      <BSInlineFunction functionName={"TickTask"} />, while a <span className="text-light">GA</span> cannot. Tick is needed
                      here because the control rotation of the character needs to be lerped smoothly across frames.
                    </p>
                  </div>
                </div>
              </div>
              <div className="article-subsection" ref={Ref_gasSc_asb} id="classes-UBSAttributeSetBase">
                <BlogHeadingClass
                  baseClass="UAttributeSet"
                  childClass="UBSAttributeSetBase"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Globals/BSAttributeSetBase.cpp"
                />
                <p className="">
                  An Attribute Set is a group of stats that an actor with an <span className="text-light">ASC</span> has. BeatShot has
                  several attributes, including MaxHealth, Health, HitDamage, TrackingDamage, and TotalDamage.
                </p>
                <p className="">
                  MaxHealth and Health are regular attributes that are replicated, while all damage attributes are considered{" "}
                  <span className="text-light">Meta</span> attributes. Meta attributes only exist on the server and are used in BeatShot to
                  calculate the damage that should be applied to a target.
                </p>
                <ul>
                  In my implementation, attribute sets live in different places depending on the actor:
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    Attribute sets on targets reside on the actor itself (<BSInlineFunction className={"ATarget"} />
                    ).
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    Attribute sets on characters reside in the Player State <BSInlineFunction className={"ABSPlayerState"} />.
                  </li>
                </ul>
                <p className="">
                  <BSInlineFunction className={"FBSAttributeEvent"} /> is a delegate that I created that broadcasts any time an attribute is
                  changed. Health and MaxHealth both have one of these delegates (<BSInlineFunction className={"OnHealthChanged"} />,{" "}
                  <BSInlineFunction className={"OnMaxHealthChanged"} />
                  ), but the damage attributes do not.
                </p>
              </div>
            </div>
            <div className="article-section" ref={Ref_ge} id="gameplay-effects">
              <BlogHeading headingText="Gameplay Effects" headingLevel={1} />
              <p>
                Gameplay Effects <span className="text-light">GEs</span> are a critical part of GAS, but they are not subclassed. I’ll share
                the description from the{" "}
                <Link className="link text-light hover-white" href={"https://github.com/tranek/GASDocumentation"}>
                  GAS Documentation
                </Link>
                :
              </p>
              <blockquote className="otro-blockquote">
                GameplayEffects (GE) are the vessels through which abilities change Attributes and Gameplay Tags on themselves and others.
                They can cause immediate Attribute changes like damage or healing or apply long term status buff/debuffs like a movespeed
                boost or stunning. The UGameplayEffect class is a meant to be a data-only class that defines a single gameplay effect. No
                additional logic should be added to GameplayEffects. Typically designers will create many Blueprint child classes of
                UGameplayEffect.
              </blockquote>
              <p>
                Any damage that is dealt in BeatShot is applied using an instant duration <span className="text-light">GE</span>. This is
                discussed further in the{" "}
                <Link className="link text-light hover-white" href={"#classes-UBSDamageExecCalc"}>
                  UBSDamageExecCalc section
                </Link>
                .
              </p>
              <p>
                Duration and Infinite <span className="text-light">GEs</span> have the option of applying periodic effects, which are
                treated like Instant <span className="text-light">GEs</span> that occur at fixed intervals. These are set up using timers.
              </p>
              <div className="article-subsection" id="ge-infinite" ref={Ref_ge_tarImm}>
                <BlogHeading headingText="Target Immunity" headingLevel={2} />
                <p>
                  <span className="text-light">GEs</span> have a property called{" "}
                  <span className="text-light">Granted Application Immunity Tags</span> which grant the owner immunity to all matching{" "}
                  <span className="text-light">GAs</span> that have the same <span className="text-light">Ability Tag</span>.
                </p>
                <p>
                  Game modes that use Hit-Based damage spawn targets with immunity to the Tracking Ability (and consequently Tracking
                  Damage). These targets will have the corresponding <span className="text-light">Ability Tag</span> of{" "}
                  <span className="text-light">Ability.Track</span> in their{" "}
                  <span className="text-light">Granted Application Immunity Tags</span>.
                </p>
                <p>
                  Targets can also be immune to all damage, such as before a game mode starts or if a Target Activation/Deactivation
                  Response involves removing or applying immunity. These various types of immunity are applied using infinite duration{" "}
                  <span className="text-light">GEs</span>, and are typically called directly on the target itself using{" "}
                  <BSInlineFunction functionName="ApplyGameplayEffectToSelf" />.
                </p>
              </div>
              <div className="article-subsection" id="fire-cooldown" ref={Ref_ge_fireCD}>
                <BlogHeading headingText="Fire Cooldown" headingLevel={2} />
                <p>
                  To apply a cooldown to the Fire Gun Ability, or basically fire rate, a duration-based{" "}
                  <span className="text-light">GE</span> is supplied to the <span className="text-light">GA</span> blueprint property{" "}
                  <span className="text-light">Cooldown Gameplay Effect Class</span>. This <span className="text-light">GE</span> has the
                  following blueprint properties:
                </p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <span className="text-light">Duration Policy</span>: Has Duration
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <span className="text-light">Scalable Float Magnitude</span>: fire rate of the weapon
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <span className="text-light">Granted Tags</span>: <span className="text-light">Data.Cooldown</span> is added
                  </li>
                </ul>
                <p>
                  I use a generic universal cooldown <span className="text-light">Gameplay Tag</span> called{" "}
                  <span className="text-light">Data.Cooldown</span> but that might change in the future.
                </p>
              </div>
            </div>
            <div className="article-section" ref={Ref_ac} id="additional-classes">
              <BlogHeading headingText="Additional Classes" headingLevel={1} />
              <p>
                I used the{" "}
                <Link
                  className="link text-light hover-white"
                  href={"https://docs.unrealengine.com/5.3/en-US/lyra-sample-game-in-unreal-engine/"}
                >
                  Lyra Sample Project
                </Link>{" "}
                as a guide for implementing GAS, so I chose to include some additional classes that made things work better.
              </p>
              <div className="article-subsection" ref={Ref_ac_eic} id="classes-UBSInputComponent">
                <BlogHeadingClass
                  baseClass="UEnhancedInputComponent"
                  childClass="UBSInputComponent"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/Input/BSInputComponent.cpp"
                />
                <p>
                  I chose to implement this class simply because I found the <BSInlineFunction functionName={"BindAbilityActions"} />{" "}
                  function in the Lyra Sample Project. This function allows abilities to be bound to an{" "}
                  <span className="text-light">Input Action</span> using an <span className="text-light">Input Tag</span>. These mappings
                  are done through the data asset <BSInlineFunction className={"UBSInputConfig"} />.
                </p>
                <div className="article-subsection" ref={Ref_ac_eic_ic} id="classes-UBSInputConfig">
                  <BlogHeadingClass
                    baseClass="UDataAsset"
                    childClass="UBSInputConfig"
                    headingLevel={3}
                    childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/Input/BSInputConfig.cpp"
                  />
                  <p>
                    This data asset maps each <span className="text-light">Input Action</span> (<span className="text-light">IA</span>) to
                    an <span className="text-light">Input Tag</span>, which is just a <span className="text-light">Gameplay Tag</span>.{" "}
                    <span className="text-light">Input Tags</span> are used so that <span className="text-light">IAs</span> can be bound to
                    abilities that might not yet be granted. All <span className="text-light">IAs</span> are bound to functions inside the{" "}
                    <BSInlineFunction className={"ABSCharacter"} /> class, and are bound during{" "}
                    <BSInlineFunction functionName={"InitializePlayerInput"} />. This data asset splits{" "}
                    <span className="text-light">IAs</span> into two categories:
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <span className="text-light">Native Input Actions</span> are things like look, move, and walk. They are not tied to an
                      ability. Each of these are bound to unique functions.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <span className="text-light">Ability Input Actions</span> are bound to specific abilities. All of these are all bound
                      to the same functions: <BSInlineFunction functionName={"Input_AbilityInputTagPressed"} /> and{" "}
                      <BSInlineFunction functionName={"Input_AbilityInputTagReleased"} />.
                    </li>
                  </ul>
                  <p>
                    Each <span className="text-light">GA</span> blueprint that requires input from the user should contain the{" "}
                    <span className="text-light">Input Tag</span> in the bluprint property <span className="text-light">Ability Tags</span>.
                    For example, the Fire Gun blueprint <span className="text-light">Ability Tags</span> are{" "}
                    <span className="text-light">Ability.Fire</span> and <span className="text-light">Input.Fire</span>. As shown in the
                    figure below, the <span className="text-light">Input Tag</span> for the <span className="text-light">IA</span>{" "}
                    associated with firing the weapon is also <span className="text-light">Input.Fire</span>.
                  </p>
                  <figure className="max-width-1000">
                    <div className="figure-border-container">
                      <Image src={DA_InputConfig} quality={100} alt="DA_InputConfig" />
                      <figcaption>
                        <p className="figlabel">Figure 1: </p>
                        The input configuration for a character in BeatShot.
                      </figcaption>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="article-subsection" ref={Ref_ac_as} id="classes-UBSAbilitySet">
                <BlogHeadingClass
                  baseClass="UDataAsset"
                  childClass="UBSAbilitySet"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/Globals/BSAbilitySet.cpp"
                />
                <p>
                  An ability set is a group of <span className="text-light">Gameplay Abilities</span>,{" "}
                  <span className="text-light">Gameplay Effects</span>, and <span className="text-light">Attribute Sets</span>. This
                  isn&#39;t strictly necessary to implement, but it makes it easier to grant and remove a large number of{" "}
                  <span className="text-light">GAs</span> and <span className="text-light">GEs</span> that use various{" "}
                  <span className="text-light">Attribute Sets</span>.
                </p>
                <p>
                  <BSInlineFunction functionName={"GiveToAbilitySystem"} /> handles granting all components of this class to the specified{" "}
                  <span className="text-light">ASC</span> and <BSInlineFunction functionName={"TakeFromAbilitySystem"} /> handles their
                  removal.
                </p>
                <p>
                  A <span className="text-light">GA</span> is granted by creating an <BSInlineFunction className={"FGameplayAbilitySpec"} />{" "}
                  and calling <BSInlineFunction functionName={"GiveAbility"} /> on the <span className="text-light">ASC</span>. This returns
                  an <span className="text-light">FGameplayAbilitySpecHandle</span>, which is stored so that it can later be used to remove
                  the <span className="text-light">GA</span> using <BSInlineFunction functionName={"ClearAbility"} />.
                </p>
                <p>
                  Similarly, a <span className="text-light">GE</span> is applied by creating an{" "}
                  <BSInlineFunction className={"FGameplayEffectSpec"} /> and calling{" "}
                  <BSInlineFunction functionName={"ApplyGameplayEffectToSelf"} /> on the <span className="text-light">ASC</span>. This
                  returns an <span className="text-light">FGameplayEffectSpecHandle</span>, which is stored so that it can later be used to
                  remove the <span className="text-light">GE</span> using <BSInlineFunction functionName={"RemoveActiveGameplayEffect"} />.
                </p>
                <p>
                  An <span className="text-light">Attribute Set</span> is granted by creating a new{" "}
                  <span className="text-light">Attribute Set</span> object and calling{" "}
                  <BSInlineFunction functionName={"AddAttributeSetSubobject"} />. This returns the added{" "}
                  <span className="text-light">Attribute Set</span>, which is stored so that it can be later used to remove the{" "}
                  <span className="text-light">Attribute Set</span> using <BSInlineFunction functionName={"RemoveSpawnedAttribute"} />.
                </p>
                <p>
                  The figure below shows the Ability Set that is granted to the character when the knife is equipped. The{" "}
                  <span className="text-light">Input Tag</span> is not strictly necessary since all the abilities already have it in their{" "}
                  <span className="text-light">Ability Tags</span>.
                </p>
                <figure>
                  <div className="figure-border-container max-width-1000">
                    <Image src={DA_KnifeAbilitySet} quality={100} alt="DA_KnifeAbilitySet" />
                    <figcaption>
                      <p className="figlabel">Figure 2: </p>
                      The Ability Set for the when the character has a knife equipped.
                    </figcaption>
                  </div>
                </figure>
              </div>
              <div className="article-subsection" ref={Ref_ac_dec} id="classes-UBSDamageExecCalc">
                <BlogHeadingClass
                  baseClass="UGameplayEffectExecutionCalculation"
                  childClass="UBSDamageExecCalc"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/AbilitySystem/ExecutionCalculations/BSDamageExecCalc.cpp"
                />
                <p>
                  Instead of just &#34;Apply 100 damage by removing 100 health points&#34;, a Gameplay Effect Execution Calculation lets you
                  execute additional calculations, such as snapshotting various attributes from both the source and the target. Examples
                  could include taking armor, shield, or resistances into account to get the final damage value to be applied. It also gives
                  access to both the source and target <span className="text-light">Gameplay Tags</span>.
                </p>
              </div>
              <div className="article-subsection" ref={Ref_ac_hc} id="classes-UBSHealthComponent">
                <BlogHeadingClass
                  baseClass="UActorComponent"
                  childClass="UBSHealthComponent"
                  headingLevel={2}
                  childClassLink="https://github.com/markoleptic/BeatShot/blob/develop/Source/BeatShot/Private/Character/BSHealthComponent.cpp"
                />
                <p>
                  This component is added to any actors where keeping track of their current health is important. In my case, this is just
                  added to targets.
                </p>
                <p>
                  To be honest, the Health Component is kind of unnecessary since the target could just bind to the{" "}
                  <BSInlineFunction className={"UBSAttributeSetBase"} />
                  &#39;s <BSInlineFunction className={"OnHealthChanged"} /> delegate directly, but if I wanted to add additional actors that
                  use Health Components in the future, it would be less coding in the long run.
                </p>
              </div>
            </div>
            <div className="article-section" ref={Ref_tl} id="timeline">
              <BlogHeading headingText="Timeline" headingLevel={1} />
              <p>
                For this section, I detail what happens when the player in BeatShot shoots a target in a Hit-Based game mode. This means
                that the <span className="text-light">GA</span> used throughout this section will always be{" "}
                <BSInlineFunction className={"UBSGA_FireGun"} />.
              </p>
              <div className="article-subsection" ref={Ref_tl_input} id="timeline-Input">
                <BlogHeading headingText="Input" headingLevel={2} />
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    Player presses the key or mouse that is bound to an <span className="text-light">Input Action</span>.
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    <BSInlineFunction functionName={"Input_AbilityInputTagPressed"} /> is called on the character, which simply calls{" "}
                    <BSInlineFunction functionName={"AbilityInputTagPressed"} /> on the character&#39;s{" "}
                    <span className="text-light">ASC</span>. If the <span className="text-light">ASC</span> finds an activatable{" "}
                    <span className="text-light">GA</span> with the matching <span className="text-light">Ability Tag</span>, the{" "}
                    <span className="text-light">Gameplay Ability Handle</span> is added to InputPressedSpecHandles. These get processed in{" "}
                    <BSInlineFunction functionName={"ProcessAbilityInput"} />. This function is called from the player controller inside{" "}
                    <BSInlineFunction functionName={"PostProcessInput"} />.
                  </li>
                </ul>
              </div>
              <div className="article-subsection" ref={Ref_tl_aa} id="timeline-AbilityActivation">
                <BlogHeading headingText="Ability Activation" headingLevel={2} />
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    If an activatable ability was found in the <span className="text-light">ASC</span>,{" "}
                    <BSInlineFunction functionName={"TryActivateAbility"} /> is called, which begins a series of internal function calls
                    that eventually end up calling <BSInlineFunction functionName={"ActivateAbility"} /> on{" "}
                    <BSInlineFunction className={"UBSGA_FireGun"} />.
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                    The C++ version of <BSInlineFunction functionName={"ActivateAbility"} /> doesn’t do anything noteworthy but the
                    blueprint version calls <BSInlineFunction functionName={"StartTargeting"} />, which is implemented in C++ and is
                    discussed in the next section. It also calls the blueprint version of{" "}
                    <BSInlineFunction functionName={"PlayMontageAndWait"} /> which plays the Animation Montage for the weapon recoil.{" "}
                    <BSInlineFunction functionName={"PlayMontageAndWait"} /> will call <BSInlineFunction functionName={"EndAbility"} /> if
                    it is able to finish the animation before the ability ends, but this should never be the case.
                  </li>
                </ul>
                <div className="article-subsection-2" ref={Ref_tl_aa_st} id="timeline-StartTargeting">
                  <BlogHeadingClass childClassColor="#50fa7b" childClass="StartTargeting" headingLevel={3} />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      This function&#39;s main purpose is to create the structure that holds the targeting data. This comes in the form of
                      an <BSInlineFunction className={"FGameplayAbilityTargetDataHandle"} />, which holds an array of pointers to{" "}
                      <BSInlineFunction className={"FGameplayAbilityTargetData"} />.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction className={"FGameplayAbilityTargetData"} /> allows passing data across the network. GAS comes with
                      several subclassed versions, but the one used here is{" "}
                      <BSInlineFunction className={"FGameplayAbilityTargetData_SingleTargetHit"} /> since it allows passing a HitResult.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The HitResult is obtained by calling <BSInlineFunction functionName={"SingleWeaponTrace"} />, which traces a single
                      line using a collision channel I created that ignores any pawn or weapon meshes. The start of the trace begins at the
                      player’s Camera Component, some maths are done to find end location, and{" "}
                      <BSInlineFunction className="UWorld" functionName="SingleWeaponTrace" /> is called to get the HitResult.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The last thing <BSInlineFunction functionName={"StartTargeting"} /> does is call{" "}
                      <BSInlineFunction functionName={"OnTargetDataReadyCallback"} />.
                    </li>
                  </ul>
                </div>
                <div className="article-subsection-2" ref={Ref_tl_aa_otdrc} id="timeline-OnTargetDataReadyCallback">
                  <BlogHeadingClass childClassColor="#50fa7b" childClass="OnTargetDataReadyCallback" headingLevel={3} />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      This function does some more networking stuff like creating a ScopedPredictionWindow and RPC the target data to the
                      server, but I&#39;m no expert on these topics since I just copied them from the Lyra Example Project.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction functionName={"CommitAbility"} /> is called on the <span className="text-light">GA</span>. This is
                      where any cooldowns or costs associated with the ability are checked. The cooldown for FireGun is the same as the
                      weapon’s fire rate, but there is no cost to firing the weapon since BeatShot’s weapons have unlimited ammo. If{" "}
                      <BSInlineFunction functionName={"CommitAbility"} /> returns false, the ability is ended, otherwise{" "}
                      <BSInlineFunction functionName={"OnTargetDataReady"} /> is called. This function is implemented in the{" "}
                      <BSInlineFunction className={"UBSGA_FireGun"} /> blueprint.
                    </li>
                  </ul>
                </div>
                <div className="article-subsection-2" ref={Ref_tl_aa_otdr} id="timeline-OnTargetDataReady">
                  <BlogHeadingClass childClassColor="#50fa7b" childClass="OnTargetDataReady" headingLevel={3} />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The <BSInlineFunction className={"FGameplayAbilityTargetDataHandle"} /> is the only parameter passed to this function,
                      which is what <BSInlineFunction functionName={"StartTargeting"} /> created earlier.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      If the HitResult contained a blocking hit, an <BSInlineFunction className={"FGameplayEffectSpec"} /> (
                      <span className="text-light">GESpec</span>) is creating using{" "}
                      <BSInlineFunction functionName={"MakeOutgoingGameplayEffectSpec"} /> with the input{" "}
                      <span className="text-light">GE</span> containing the blueprint properties:
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                          <span className="text-light">Duration Policy</span>: Instant
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                          <span className="text-light">Executions</span>: The C++ class <BSInlineFunction className={"BSDamageExecCalc"} />{" "}
                          is added
                        </li>
                      </ul>
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction className={"ApplyGameplayEffectSpecToTarget"} /> is called using the{" "}
                      <span className="text-light">GESpec</span> and target data.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The <BSInlineFunction functionName={"ExecuteGameplayCueWithParamsOnOwner"} /> blueprint function is called using the
                      HitResult as a parameter and the <span className="text-light">Gameplay Cue Tag</span> of{" "}
                      <span className="text-light">GameplayCue.FireGun</span>. The{" "}
                      <Link className="link text-light hover-white" href={"#timeline-GameplayCues"}>
                        Gameplay Cues section
                      </Link>{" "}
                      goes over what happens when this is called.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction className={"EndAbility"} /> is called after execution of the <span className="text-light">GE</span>{" "}
                      and <span className="text-light">GC</span>.
                    </li>
                  </ul>
                  <BlueprintGraph
                    bpLink="https://blueprintue.com/render/hoqr4itn/"
                    label="Blueprint Graph 1"
                    description={<BSInlineFunction className="UBSGA_FireGun" functionName={"OnTargetDataReady"} />}
                  />
                </div>
              </div>
              <div className="article-subsection" ref={Ref_tl_geApp} id="timeline-ApplyingTheGE">
                <BlogHeading headingText="Applying The Gameplay Effect" headingLevel={2} />
                <p>
                  A <span className="text-light">GESpec</span> is essentially just a modifiable instance of a{" "}
                  <span className="text-light">GE</span> since a <span className="text-light">GE</span> is a data-only class. Inside its{" "}
                  <BSInlineFunction functionName={"Initialize"} /> function, it sets the context and performs other prep-related tasks. One
                  of these tasks is calling <BSInlineFunction functionName={"CaptureDataFromSource"} />. This informs the{" "}
                  <span className="text-light">GESpec</span> which attributes to capture from the source. This can be called multiple times
                  depending on source target setup. Target attributes are captured later in execution.
                </p>
                <p>
                  There&#39;s actually three <BSInlineFunction functionName={"ApplyGameplayEffectSpecToTarget"} /> functions that are called
                  since we&#39;re starting from a <span className="text-light">GA</span>. It starts with the one owned by the{" "}
                  <span className="text-light">GA</span> and then calls the <BSInlineFunction className={"FGameplayAbilityTargetData"} />{" "}
                  version, which duplicates the <span className="text-light">GESpec</span> and context. Then it calls the{" "}
                  <span className="text-light">ASC</span> version for each targeted actor, but there will only be one in this example.
                </p>
                <div className="article-subsection-2" ref={Ref_tl_geApp_agets} id="timeline-ApplyGESpectoSelf">
                  <BlogHeadingClass childClassColor="#50fa7b" childClass="ApplyGameplayEffectSpecToSelf" headingLevel={3} />
                  <p>
                    <BSInlineFunction functionName={"ApplyGameplayEffectSpecToTarget"} /> is just a convenience function that calls{" "}
                    <BSInlineFunction functionName={"ApplyGameplayEffectSpecToSelf"} /> using the target{" "}
                    <span className="text-light">ASC</span> parameter. In this example, it’s the <BSInlineFunction className={"ATarget"} />
                    ’s <span className="text-light">ASC</span>.
                  </p>
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      For all <span className="text-light">GE Duration Types, </span> Application immunity is checked and the chance to
                      apply the effect is calculated (always 100% in this example). Application Tag Requirements, Removal Tag Requirements,
                      and Custom Application Requirements are also checked (none here).
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The major difference between Instant and all other <span className="text-light">Duration Types</span> is that Instant
                      GEs are not <u>applied</u> but instead <u>executed</u> through{" "}
                      <BSInlineFunction functionName={"ExecuteGameplayEffect"} />. All other types instead call{" "}
                      <BSInlineFunction functionName={"ApplyGameplayEffectSpec"} /> on the{" "}
                      <BSInlineFunction className={"FActiveGameplayEffectsContainer"} />.{" "}
                      <BSInlineFunction functionName={"ExecuteGameplayEffect"} /> is detailed in the next section.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      Any effects that should be removed on application of this <span className="text-light">GE</span> are removed.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      The source <BSInlineFunction className={"OnGameplayEffectAppliedToSelf"} /> and the target{" "}
                      <BSInlineFunction className={"OnGameplayEffectAppliedToTarget"} /> delegates are broadcast.
                    </li>
                    <div className="article-subsection-2" ref={Ref_tl_geApp_ege} id="timeline-ExecuteGameplayEffect">
                      <BlogHeadingClass childClassColor="#50fa7b" childClass="ExecuteGameplayEffect" headingLevel={4} />
                      <p>
                        <BSInlineFunction functionName={"ExecuteGameplayEffect"} /> calls{" "}
                        <BSInlineFunction functionName={"ExecuteActiveEffectsFrom"} /> on the{" "}
                        <BSInlineFunction className={"FActiveGameplayEffectsContainer"} /> within the{" "}
                        <span className="text-light">ASC</span>, which is really where the <span className="text-light">GE</span> gets
                        executed on attributes and <span className="text-light">Active GEs</span>.
                      </p>
                      <ul>
                        <li>
                          <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                          Target attributes are captured using <BSInlineFunction functionName={"CaptureAttributeDataFromTarget"} />.
                        </li>
                        <li>
                          <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                          Any <span className="text-light">Modifiers</span> and <span className="text-light">Executions</span> on the{" "}
                          <span className="text-light">GE</span> are executed.
                          <ul>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              As previously mentioned, BeatShot uses two types of damage: Hit and Tracking. These attributes are snapshotted
                              from the source (damage causer) during initialization of the of <span className="text-light">GESpec</span>.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              The <span className="text-light">GE</span> created earlier uses the{" "}
                              <span className="text-light">Execution Calculation Class</span>{" "}
                              <BSInlineFunction className={"UBSDamageExecCalc"} />.{" "}
                              <BSInlineFunction functionName={"Execute_Implementation"} /> is where the calculation takes place.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              It first accesses the source and target <span className="text-light">Gameplay Tags</span>. This tells the it
                              which kinds of immunity, if any, the target has. If the target is immune to Hit Damage, the{" "}
                              <span className="text-light">Hit Damage</span> attribute that was captured from the source is not used in the
                              damage calculation. Similarly, if the target is immune to Tracking Damage, the{" "}
                              <span className="text-light">Tracking Damage</span> attribute is not used.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              Next, the calculation adds an <span className="text-light">Output Execution Modifier</span> that sets the
                              value of the <span className="text-light">Total Damage Meta</span> attribute. This directly modifies the
                              attribute on the target <span className="text-light">ASC</span>. After the GE is executed,{" "}
                              <BSInlineFunction functionName={"PostGameplayEffectExecute"} /> is called on the target{" "}
                              <span className="text-light">Attribute Set</span>.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              Inside <BSInlineFunction functionName={"PostGameplayEffectExecute"} />, the input parameter{" "}
                              <BSInlineFunction className={"FGameplayEffectModCallbackData"} /> describes which, if any, attributes were
                              changed by the <span className="text-light">GE</span>. In this example, the{" "}
                              <span className="text-light">TotalDamage</span> attribute will appear as modified. Then, the{" "}
                              <span className="text-light">Health</span> attribute is set to its current value subtracted by the value of{" "}
                              <span className="text-light">TotalDamage</span>. The <span className="text-light">OnHealthChanged</span>{" "}
                              delegate is then broadcast.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              The <span className="text-light">OnHealthChanged</span> delegate is then broadcast.
                            </li>
                            <li>
                              <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                              If an <span className="text-light">Execution</span> wants conditional effects to trigger, those are applied.
                              (None for this example).
                            </li>
                          </ul>
                        </li>
                        <p>
                          Instead of using a <span className="text-light">GE Execution</span>, I could have used a{" "}
                          <span className="text-light">GE Modifier</span>. You can also use both.
                        </p>
                        <p>
                          Instead of using the <span className="text-light">TotalDamage Meta</span> attribute, I could have directly set the
                          value of the <span className="text-light">Health Attribute</span> inside the Execution Calculation. However, the
                          attribute could get changed twiced if the Execution Calculation did not clamp the value while{" "}
                          <BSInlineFunction functionName={"PreAttributeChange"} /> did.{" "}
                        </p>
                        <p>
                          <BSInlineFunction functionName={"PreAttributeChange"} /> still gets called before{" "}
                          <BSInlineFunction functionName={"PostGameplayEffectExecute"} />, so it would not have an impact on any
                          <span className="text-light">OnHealthChanged</span> delegate receivers. However, the{" "}
                          <span className="text-light">ASC</span> provides a delegate called the
                          <span className="text-light">GameplayAttributeValueChangeDelegate</span>, which would get called twice.
                        </p>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
              <div className="article-subsection" ref={Ref_tl_gc} id="timeline-GameplayCues">
                <BlogHeading headingText="Gameplay Cues" headingLevel={2} />
                <p>
                  <span className="text-light">Gameplay Cues</span> allow non-gameplay related tasks to execute like effects, decals, etc.
                  You can trigger them through <span className="text-light">GEs</span> or directly like I did in Blueprint Graph 1. I chose
                  not to use a <span className="text-light">GE</span> because I always want{" "}
                  <span className="text-light">GameplayCue.FireGun</span> to trigger any time the ability is activated regardless of the{" "}
                  <span className="text-light">GE</span> application success.
                </p>
                <p>
                  I chose to use a <BSInlineFunction className="UGameplayCueNotify_Burst" /> since its meant to be used for one-off events.{" "}
                  <BSInlineFunction className="AGameplayCueNotify_Actor" /> is another version that is actually spawned in the world, but
                  that is not used in this example.
                </p>
                <div className="article-subsection-2" ref={Ref_tl_gc_wf} id="timeline-GCNWeaponFire">
                  <BlogHeading headingText="GCN_WeaponFire and BP_WeaponFire" headingLevel={3} />
                  <ul>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction className="GCN_WeaponFire" /> is the <BSInlineFunction className="UGameplayCueNotify_Burst" />{" "}
                      blueprint class that handles the <span className="text-light">GameplayCue.FireGun</span> response. First, the C++
                      function <BSInlineFunction functionName="Fire" /> is called on the character’s weapon to increment the total shots
                      fired by the player.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      Next, recoil is applied to the character if the gun has a <span className="text-light">Gameplay Tag</span> that
                      denotes if recoil should be used.
                    </li>
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      Finally, the blueprint function <BSInlineFunction functionName="Fire_BP" /> is called on the weapon, and the Impact
                      Position and Impact Normal from the HitResult are passed as parameters. This function is responsible for spawning the{" "}
                      <BSInlineFunction className="WeaponFire" /> blueprint class, as well as updating a few variables inside that instruct
                      whether or not and where to spawn the various effects.
                    </li>
                    <BlueprintGraph
                      bpLink="https://blueprintue.com/render/pqprz-_7/"
                      label="Blueprint Graph 2"
                      description={<BSInlineFunction className="GameplayCueNotify_Burst" functionName={"OnBurst"} />}
                    />
                    <li>
                      <FontAwesomeIcon icon={faCrosshairs} className="li-icon" />
                      <BSInlineFunction className="WeaponFire" /> manages the bullet tracers, muzzle flash, and decals. A separate actor is
                      used so that if the character swaps to the knife, the effects are still managed without relying on the weapon. There
                      isn’t much too much going on here besides calling <BSInlineFunction functionName="SpawnSystemAttached" /> and{" "}
                      <BSInlineFunction functionName="SpawnDecal" />.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <p className="inline posted-date">
                <span className="inline text-light">Posted:</span> September 8, 2023
                <br></br>
                <time dateTime="2023-09-08">
                  <span className="inline text-light">Updated:</span> September 8, 2023
                </time>
              </p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default GameplayAbilitySystem;
