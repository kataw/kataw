# Kataw parser test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
functionName<A /* A comment */>();@{xd}@
const a: T</* comment */> = 1;@{xd}@
functionName</* comment */>();@{xd}@
function foo</* comment */>() {}@{xd}@
interface Foo {@{xd}@
 </* comment */>(arg): any;@{xd}@
}@{xd}@
type T = </* comment */>(arg) => any;@{xd}@
@{xd}@
functionName<@{xd}@
  A // comment@{xd}@
>();@{xd}@
const a: T<@{xd}@
  // comment@{xd}@
> = 1;@{xd}@
functionName<@{xd}@
  // comment@{xd}@
>();@{xd}@
function foo<@{xd}@
  // comment@{xd}@
>() {}@{xd}@
interface Foo {@{xd}@
 <@{xd}@
  A// comment@{xd}@
 >(arg): any;@{xd}@
}@{xd}@
type T = <@{xd}@
  // comment@{xd}@
>(arg) => any;@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "functionName<A /* A comment */>();\nconst a: T</* comment */> = 1;\nfunctionName</* comment */>();\nfunction foo</* comment */>() {}\ninterface Foo {\n </* comment */>(arg): any;\n}\ntype T = </* comment */>(arg) => any;\n\nfunctionName<\n  A // comment\n>();\nconst a: T<\n  // comment\n> = 1;\nfunctionName<\n  // comment\n>();\nfunction foo<\n  // comment\n>() {}\ninterface Foo {\n <\n  A// comment\n >(arg): any;\n}\ntype T = <\n  // comment\n>(arg) => any;",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 0,@{xd}@
                        "end": 12@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 14@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 13,@{xd}@
                                "end": 31@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 13,@{xd}@
                        "end": 31@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 32,@{xd}@
                        "end": 32@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 12,@{xd}@
                    "end": 33@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 40,@{xd}@
                                "end": 42@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 43,@{xd}@
                                    "end": 45@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 46,@{xd}@
                                    "end": 46@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 43,@{xd}@
                                "end": 62@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 62,@{xd}@
                                "end": 64@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 40,@{xd}@
                            "end": 64@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 40,@{xd}@
                    "end": 64@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 34,@{xd}@
                "end": 65@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 65,@{xd}@
                        "end": 78@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 79,@{xd}@
                        "end": 93@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 94,@{xd}@
                        "end": 94@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 78,@{xd}@
                    "end": 95@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 65,@{xd}@
                "end": 96@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 105,@{xd}@
                    "end": 109@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 125,@{xd}@
                    "end": 126@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 128,@{xd}@
                        "end": 128@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 126,@{xd}@
                    "end": 129@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 110,@{xd}@
                    "end": 110@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 96,@{xd}@
                "end": 129@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 139,@{xd}@
                    "end": 143@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [],@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 148,@{xd}@
                                "end": 148@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 163,@{xd}@
                                            "end": 166@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 163,@{xd}@
                                        "end": 166@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 163,@{xd}@
                                "end": 166@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 168,@{xd}@
                                "end": 172@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 145,@{xd}@
                            "end": 173@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 145,@{xd}@
                    "end": 173@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 129,@{xd}@
                "end": 175@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 180,@{xd}@
                    "end": 182@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 186,@{xd}@
                        "end": 186@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 201,@{xd}@
                                    "end": 204@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 201,@{xd}@
                                "end": 204@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 201,@{xd}@
                        "end": 204@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 208,@{xd}@
                        "end": 212@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 184,@{xd}@
                    "end": 212@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 175,@{xd}@
                "end": 213@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 213,@{xd}@
                        "end": 227@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 228,@{xd}@
                                    "end": 232@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 228,@{xd}@
                                "end": 245@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 228,@{xd}@
                        "end": 245@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 246,@{xd}@
                        "end": 246@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 227,@{xd}@
                    "end": 247@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 213,@{xd}@
                "end": 248@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 254,@{xd}@
                                "end": 256@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 257,@{xd}@
                                    "end": 259@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 260,@{xd}@
                                    "end": 260@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 257,@{xd}@
                                "end": 277@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 277,@{xd}@
                                "end": 279@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 254,@{xd}@
                            "end": 279@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 254,@{xd}@
                    "end": 279@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 248,@{xd}@
                "end": 280@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 280,@{xd}@
                        "end": 293@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 294,@{xd}@
                        "end": 309@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 310,@{xd}@
                        "end": 310@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 293,@{xd}@
                    "end": 311@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 280,@{xd}@
                "end": 312@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 321,@{xd}@
                    "end": 325@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 342,@{xd}@
                    "end": 343@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 345,@{xd}@
                        "end": 345@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 343,@{xd}@
                    "end": 346@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 326,@{xd}@
                    "end": 326@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 312,@{xd}@
                "end": 346@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 356,@{xd}@
                    "end": 360@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8424,@{xd}@
                                        "name": {@{xd}@
                                            "kind": 196711,@{xd}@
                                            "text": "A",@{xd}@
                                            "rawText": "A",@{xd}@
                                            "flags": 16384,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 0,@{xd}@
                                            "start": 365,@{xd}@
                                            "end": 369@{xd}@
                                        },@{xd}@
                                        "constraint": null,@{xd}@
                                        "defaultType": null,@{xd}@
                                        "expression": null,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 2097152,@{xd}@
                                        "start": 365,@{xd}@
                                        "end": 369@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 365,@{xd}@
                                "end": 369@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 383,@{xd}@
                                            "end": 386@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 383,@{xd}@
                                        "end": 386@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 383,@{xd}@
                                "end": 386@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 388,@{xd}@
                                "end": 392@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 362,@{xd}@
                            "end": 393@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 362,@{xd}@
                    "end": 393@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 346,@{xd}@
                "end": 395@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 400,@{xd}@
                    "end": 402@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 406,@{xd}@
                        "end": 406@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 422,@{xd}@
                                    "end": 425@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 422,@{xd}@
                                "end": 425@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 422,@{xd}@
                        "end": 425@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 429,@{xd}@
                        "end": 433@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 404,@{xd}@
                    "end": 433@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 395,@{xd}@
                "end": 434@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 434@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 434@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@

## Output

### Hybrid CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "parser",
                "rawText": "parser",
                "flags": 768,
                "start": 0,
                "end": 6
            },
            "flags": 128,
            "start": 0,
            "end": 6
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "test",
                "rawText": "test",
                "flags": 768,
                "start": 6,
                "end": 11
            },
            "flags": 128,
            "start": 6,
            "end": 11
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 226,
                            "member": {
                                "kind": 226,
                                "member": {
                                    "kind": 134299649,
                                    "text": "Input",
                                    "rawText": "Input",
                                    "flags": 768,
                                    "start": 22,
                                    "end": 28
                                },
                                "template": {
                                    "kind": 458761,
                                    "text": "",
                                    "rawText": "",
                                    "flags": 768,
                                    "start": 28,
                                    "end": 34
                                },
                                "flags": 256,
                                "start": 22,
                                "end": 34
                            },
                            "template": {
                                "kind": 458761,
                                "text": "",
                                "rawText": "",
                                "flags": 768,
                                "start": 34,
                                "end": 36
                            },
                            "flags": 256,
                            "start": 22,
                            "end": 36
                        },
                        "template": {
                            "kind": 458761,
                            "text": "js\rfunctionName<A /* A comment */>();\rconst a: T</* comment */> = 1;\rfunctionName</* comment */>();\rfunction foo</* comment */>() {}\rinterface Foo {\r </* comment */>(arg): any;\r}\rtype T = </* comment */>(arg) => any;\r\rfunctionName<\r  A // comment\r>();\rconst a: T<\r  // comment\r> = 1;\rfunctionName<\r  // comment\r>();\rfunction foo<\r  // comment\r>() {}\rinterface Foo {\r <\r  A// comment\r >(arg): any;\r}\rtype T = <\r  // comment\r>(arg) => any;\r",
                            "rawText": "js\r\nfunctionName<A /* A comment */>();\r\nconst a: T</* comment */> = 1;\r\nfunctionName</* comment */>();\r\nfunction foo</* comment */>() {}\r\ninterface Foo {\r\n </* comment */>(arg): any;\r\n}\r\ntype T = </* comment */>(arg) => any;\r\n\r\nfunctionName<\r\n  A // comment\r\n>();\r\nconst a: T<\r\n  // comment\r\n> = 1;\r\nfunctionName<\r\n  // comment\r\n>();\r\nfunction foo<\r\n  // comment\r\n>() {}\r\ninterface Foo {\r\n <\r\n  A// comment\r\n >(arg): any;\r\n}\r\ntype T = <\r\n  // comment\r\n>(arg) => any;\r\n",
                            "flags": 768,
                            "start": 36,
                            "end": 506
                        },
                        "flags": 256,
                        "start": 22,
                        "end": 506
                    },
                    "template": {
                        "kind": 458761,
                        "text": "",
                        "rawText": "",
                        "flags": 768,
                        "start": 506,
                        "end": 508
                    },
                    "flags": 256,
                    "start": 22,
                    "end": 508
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 508,
                    "end": 510
                },
                "flags": 256,
                "start": 22,
                "end": 510
            },
            "flags": 128,
            "start": 22,
            "end": 510
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Output",
                "rawText": "Output",
                "flags": 768,
                "start": 516,
                "end": 523
            },
            "flags": 128,
            "start": 516,
            "end": 523
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "Hybrid",
                "rawText": "Hybrid",
                "flags": 768,
                "start": 532,
                "end": 539
            },
            "flags": 128,
            "start": 532,
            "end": 539
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "CST",
                            "rawText": "CST",
                            "flags": 768,
                            "start": 539,
                            "end": 543
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 543,
                            "end": 551
                        },
                        "flags": 256,
                        "start": 539,
                        "end": 551
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r{\r    \"kind\": 196,\r    \"source\": \"functionName<A /* A comment */>();\nconst a: T</* comment */> = 1;\nfunctionName</* comment */>();\nfunction foo</* comment */>() {}\ninterface Foo {\n </* comment */>(arg): any;\n}\ntype T = </* comment */>(arg) => any;\n\nfunctionName<\n  A // comment\n>();\nconst a: T<\n  // comment\n> = 1;\nfunctionName<\n  // comment\n>();\nfunction foo<\n  // comment\n>() {}\ninterface Foo {\n <\n  A// comment\n >(arg): any;\n}\ntype T = <\n  // comment\n>(arg) => any;\",\r    \"filename\": \"\",\r    \"scriptBody\": {\r        \"kind\": 197,\r        \"statements\": [\r            {\r                \"kind\": 2097233,\r                \"expression\": {\r                    \"kind\": 66091,\r                    \"expression\": {\r                        \"kind\": 196712,\r                        \"text\": \"functionName\",\r                        \"rawText\": \"functionName\",\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 0,\r                        \"end\": 12\r                    },\r                    \"typeArguments\": {\r                        \"kind\": 8419,\r                        \"typeArgumentsList\": [\r                            {\r                                \"kind\": 8428,\r                                \"typeName\": {\r                                    \"kind\": 196711,\r                                    \"text\": \"A\",\r                                    \"rawText\": \"A\",\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 13,\r                                    \"end\": 14\r                                },\r                                \"typeArguments\": null,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 13,\r                                \"end\": 31\r                            }\r                        ],\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 13,\r                        \"end\": 31\r                    },\r                    \"argumentList\": {\r                        \"kind\": 3,\r                        \"elements\": [],\r                        \"trailingComma\": false,\r                        \"transformFlags\": 0,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"start\": 32,\r                        \"end\": 32\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 12,\r                    \"end\": 33\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 0,\r                \"end\": 34\r            },\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 40,\r                                \"end\": 42\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 8428,\r                                \"typeName\": {\r                                    \"kind\": 196711,\r                                    \"text\": \"T\",\r                                    \"rawText\": \"T\",\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 43,\r                                    \"end\": 45\r                                },\r                                \"typeArguments\": {\r                                    \"kind\": 8419,\r                                    \"typeArgumentsList\": [],\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 2097152,\r                                    \"start\": 46,\r                                    \"end\": 46\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 43,\r                                \"end\": 62\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 62,\r                                \"end\": 64\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 40,\r                            \"end\": 64\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 40,\r                    \"end\": 64\r                },\r                \"flags\": 16400,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 34,\r                \"end\": 65\r            },\r            {\r                \"kind\": 2097233,\r                \"expression\": {\r                    \"kind\": 66091,\r                    \"expression\": {\r                        \"kind\": 196712,\r                        \"text\": \"functionName\",\r                        \"rawText\": \"functionName\",\r                        \"flags\": 16384,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 65,\r                        \"end\": 78\r                    },\r                    \"typeArguments\": {\r                        \"kind\": 8419,\r                        \"typeArgumentsList\": [],\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 79,\r                        \"end\": 93\r                    },\r                    \"argumentList\": {\r                        \"kind\": 3,\r                        \"elements\": [],\r                        \"trailingComma\": false,\r                        \"transformFlags\": 0,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"start\": 94,\r                        \"end\": 94\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 78,\r                    \"end\": 95\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 65,\r                \"end\": 96\r            },\r            {\r                \"kind\": 264284,\r                \"name\": {\r                    \"kind\": 131102,\r                    \"text\": \"foo\",\r                    \"rawText\": \"foo\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 1025,\r                    \"start\": 105,\r                    \"end\": 109\r                },\r                \"formalParameters\": {\r                    \"kind\": 90,\r                    \"formalParameterList\": [],\r                    \"trailingComma\": false,\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 125,\r                    \"end\": 126\r                },\r                \"type\": null,\r                \"contents\": {\r                    \"kind\": 91,\r                    \"functionStatementList\": {\r                        \"kind\": 94,\r                        \"statements\": [],\r                        \"multiline\": false,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 128,\r                        \"end\": 128\r                    },\r                    \"flags\": 16384,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 126,\r                    \"end\": 129\r                },\r                \"typeParameters\": {\r                    \"kind\": 8425,\r                    \"typeParameterList\": [],\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 110,\r                    \"end\": 110\r                },\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 256,\r                \"start\": 96,\r                \"end\": 129\r            },\r            {\r                \"kind\": 8311,\r                \"name\": {\r                    \"kind\": 196712,\r                    \"text\": \"Foo\",\r                    \"rawText\": \"Foo\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 139,\r                    \"end\": 143\r                },\r                \"typeParameters\": null,\r                \"heritageClauses\": null,\r                \"objectTypeMembers\": {\r                    \"kind\": 169,\r                    \"members\": [\r                        {\r                            \"kind\": 8236,\r                            \"isReadOnly\": false,\r                            \"accessModifier\": null,\r                            \"typeParameters\": {\r                                \"kind\": 8425,\r                                \"typeParameterList\": [],\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 148,\r                                \"end\": 148\r                            },\r                            \"parameters\": {\r                                \"kind\": 8367,\r                                \"parameterList\": [\r                                    {\r                                        \"kind\": 8366,\r                                        \"ellipsis\": false,\r                                        \"binding\": {\r                                            \"kind\": 131102,\r                                            \"text\": \"arg\",\r                                            \"rawText\": \"arg\",\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 1025,\r                                            \"start\": 163,\r                                            \"end\": 166\r                                        },\r                                        \"isOptional\": false,\r                                        \"type\": null,\r                                        \"initializer\": null,\r                                        \"accessModifier\": null,\r                                        \"isReadOnly\": false,\r                                        \"flags\": 0,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 1,\r                                        \"start\": 163,\r                                        \"end\": 166\r                                    }\r                                ],\r                                \"trailingcomma\": false,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 163,\r                                \"end\": 166\r                            },\r                            \"returnType\": {\r                                \"kind\": 4202498,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 168,\r                                \"end\": 172\r                            },\r                            \"flags\": 16384,\r                            \"intersects\": false,\r                            \"transformFlags\": 2097152,\r                            \"start\": 145,\r                            \"end\": 173\r                        }\r                    ],\r                    \"multiline\": true,\r                    \"flags\": 16384,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 145,\r                    \"end\": 173\r                },\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 2097152,\r                \"start\": 129,\r                \"end\": 175\r            },\r            {\r                \"kind\": 8417,\r                \"name\": {\r                    \"kind\": 196712,\r                    \"text\": \"T\",\r                    \"rawText\": \"T\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 180,\r                    \"end\": 182\r                },\r                \"type\": {\r                    \"kind\": 8287,\r                    \"typeParameters\": {\r                        \"kind\": 8425,\r                        \"typeParameterList\": [],\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 186,\r                        \"end\": 186\r                    },\r                    \"parameters\": {\r                        \"kind\": 8367,\r                        \"parameterList\": [\r                            {\r                                \"kind\": 8366,\r                                \"ellipsis\": false,\r                                \"binding\": {\r                                    \"kind\": 131102,\r                                    \"text\": \"arg\",\r                                    \"rawText\": \"arg\",\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 1025,\r                                    \"start\": 201,\r                                    \"end\": 204\r                                },\r                                \"isOptional\": false,\r                                \"type\": null,\r                                \"initializer\": null,\r                                \"accessModifier\": null,\r                                \"isReadOnly\": false,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1,\r                                \"start\": 201,\r                                \"end\": 204\r                            }\r                        ],\r                        \"trailingcomma\": false,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 201,\r                        \"end\": 204\r                    },\r                    \"returnType\": {\r                        \"kind\": 4202498,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 208,\r                        \"end\": 212\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 184,\r                    \"end\": 212\r                },\r                \"typeParameters\": null,\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 2097152,\r                \"start\": 175,\r                \"end\": 213\r            },\r            {\r                \"kind\": 2097233,\r                \"expression\": {\r                    \"kind\": 66091,\r                    \"expression\": {\r                        \"kind\": 196712,\r                        \"text\": \"functionName\",\r                        \"rawText\": \"functionName\",\r                        \"flags\": 16384,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 213,\r                        \"end\": 227\r                    },\r                    \"typeArguments\": {\r                        \"kind\": 8419,\r                        \"typeArgumentsList\": [\r                            {\r                                \"kind\": 8428,\r                                \"typeName\": {\r                                    \"kind\": 196711,\r                                    \"text\": \"A\",\r                                    \"rawText\": \"A\",\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 228,\r                                    \"end\": 232\r                                },\r                                \"typeArguments\": null,\r                                \"flags\": 16384,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 228,\r                                \"end\": 245\r                            }\r                        ],\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 228,\r                        \"end\": 245\r                    },\r                    \"argumentList\": {\r                        \"kind\": 3,\r                        \"elements\": [],\r                        \"trailingComma\": false,\r                        \"transformFlags\": 0,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"start\": 246,\r                        \"end\": 246\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 227,\r                    \"end\": 247\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 213,\r                \"end\": 248\r            },\r            {\r                \"kind\": 142,\r                \"isConst\": true,\r                \"binding\": {\r                    \"kind\": 31,\r                    \"bindingList\": [\r                        {\r                            \"kind\": 141,\r                            \"binding\": {\r                                \"kind\": 131102,\r                                \"text\": \"a\",\r                                \"rawText\": \"a\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1025,\r                                \"start\": 254,\r                                \"end\": 256\r                            },\r                            \"exclamation\": false,\r                            \"type\": {\r                                \"kind\": 8428,\r                                \"typeName\": {\r                                    \"kind\": 196711,\r                                    \"text\": \"T\",\r                                    \"rawText\": \"T\",\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 0,\r                                    \"start\": 257,\r                                    \"end\": 259\r                                },\r                                \"typeArguments\": {\r                                    \"kind\": 8419,\r                                    \"typeArgumentsList\": [],\r                                    \"flags\": 16384,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 2097152,\r                                    \"start\": 260,\r                                    \"end\": 260\r                                },\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 257,\r                                \"end\": 277\r                            },\r                            \"initializer\": {\r                                \"kind\": 4261540,\r                                \"text\": 1,\r                                \"rawText\": \"1\",\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 0,\r                                \"start\": 277,\r                                \"end\": 279\r                            },\r                            \"flags\": 0,\r                            \"intersects\": false,\r                            \"transformFlags\": 0,\r                            \"start\": 254,\r                            \"end\": 279\r                        }\r                    ],\r                    \"flags\": 16,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 254,\r                    \"end\": 279\r                },\r                \"flags\": 16400,\r                \"intersects\": false,\r                \"transformFlags\": 769,\r                \"start\": 248,\r                \"end\": 280\r            },\r            {\r                \"kind\": 2097233,\r                \"expression\": {\r                    \"kind\": 66091,\r                    \"expression\": {\r                        \"kind\": 196712,\r                        \"text\": \"functionName\",\r                        \"rawText\": \"functionName\",\r                        \"flags\": 16384,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 280,\r                        \"end\": 293\r                    },\r                    \"typeArguments\": {\r                        \"kind\": 8419,\r                        \"typeArgumentsList\": [],\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 294,\r                        \"end\": 309\r                    },\r                    \"argumentList\": {\r                        \"kind\": 3,\r                        \"elements\": [],\r                        \"trailingComma\": false,\r                        \"transformFlags\": 0,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"start\": 310,\r                        \"end\": 310\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 293,\r                    \"end\": 311\r                },\r                \"flags\": 0,\r                \"intersects\": false,\r                \"transformFlags\": 0,\r                \"start\": 280,\r                \"end\": 312\r            },\r            {\r                \"kind\": 264284,\r                \"name\": {\r                    \"kind\": 131102,\r                    \"text\": \"foo\",\r                    \"rawText\": \"foo\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 1025,\r                    \"start\": 321,\r                    \"end\": 325\r                },\r                \"formalParameters\": {\r                    \"kind\": 90,\r                    \"formalParameterList\": [],\r                    \"trailingComma\": false,\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 342,\r                    \"end\": 343\r                },\r                \"type\": null,\r                \"contents\": {\r                    \"kind\": 91,\r                    \"functionStatementList\": {\r                        \"kind\": 94,\r                        \"statements\": [],\r                        \"multiline\": false,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 0,\r                        \"start\": 345,\r                        \"end\": 345\r                    },\r                    \"flags\": 16384,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 343,\r                    \"end\": 346\r                },\r                \"typeParameters\": {\r                    \"kind\": 8425,\r                    \"typeParameterList\": [],\r                    \"flags\": 16384,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 326,\r                    \"end\": 326\r                },\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 256,\r                \"start\": 312,\r                \"end\": 346\r            },\r            {\r                \"kind\": 8311,\r                \"name\": {\r                    \"kind\": 196712,\r                    \"text\": \"Foo\",\r                    \"rawText\": \"Foo\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 356,\r                    \"end\": 360\r                },\r                \"typeParameters\": null,\r                \"heritageClauses\": null,\r                \"objectTypeMembers\": {\r                    \"kind\": 169,\r                    \"members\": [\r                        {\r                            \"kind\": 8236,\r                            \"isReadOnly\": false,\r                            \"accessModifier\": null,\r                            \"typeParameters\": {\r                                \"kind\": 8425,\r                                \"typeParameterList\": [\r                                    {\r                                        \"kind\": 8424,\r                                        \"name\": {\r                                            \"kind\": 196711,\r                                            \"text\": \"A\",\r                                            \"rawText\": \"A\",\r                                            \"flags\": 16384,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 0,\r                                            \"start\": 365,\r                                            \"end\": 369\r                                        },\r                                        \"constraint\": null,\r                                        \"defaultType\": null,\r                                        \"expression\": null,\r                                        \"flags\": 16384,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 2097152,\r                                        \"start\": 365,\r                                        \"end\": 369\r                                    }\r                                ],\r                                \"flags\": 16384,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 365,\r                                \"end\": 369\r                            },\r                            \"parameters\": {\r                                \"kind\": 8367,\r                                \"parameterList\": [\r                                    {\r                                        \"kind\": 8366,\r                                        \"ellipsis\": false,\r                                        \"binding\": {\r                                            \"kind\": 131102,\r                                            \"text\": \"arg\",\r                                            \"rawText\": \"arg\",\r                                            \"flags\": 0,\r                                            \"intersects\": false,\r                                            \"transformFlags\": 1025,\r                                            \"start\": 383,\r                                            \"end\": 386\r                                        },\r                                        \"isOptional\": false,\r                                        \"type\": null,\r                                        \"initializer\": null,\r                                        \"accessModifier\": null,\r                                        \"isReadOnly\": false,\r                                        \"flags\": 0,\r                                        \"intersects\": false,\r                                        \"transformFlags\": 1,\r                                        \"start\": 383,\r                                        \"end\": 386\r                                    }\r                                ],\r                                \"trailingcomma\": false,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 383,\r                                \"end\": 386\r                            },\r                            \"returnType\": {\r                                \"kind\": 4202498,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 2097152,\r                                \"start\": 388,\r                                \"end\": 392\r                            },\r                            \"flags\": 16384,\r                            \"intersects\": false,\r                            \"transformFlags\": 2097152,\r                            \"start\": 362,\r                            \"end\": 393\r                        }\r                    ],\r                    \"multiline\": true,\r                    \"flags\": 16384,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 362,\r                    \"end\": 393\r                },\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 2097152,\r                \"start\": 346,\r                \"end\": 395\r            },\r            {\r                \"kind\": 8417,\r                \"name\": {\r                    \"kind\": 196712,\r                    \"text\": \"T\",\r                    \"rawText\": \"T\",\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 0,\r                    \"start\": 400,\r                    \"end\": 402\r                },\r                \"type\": {\r                    \"kind\": 8287,\r                    \"typeParameters\": {\r                        \"kind\": 8425,\r                        \"typeParameterList\": [],\r                        \"flags\": 16384,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 406,\r                        \"end\": 406\r                    },\r                    \"parameters\": {\r                        \"kind\": 8367,\r                        \"parameterList\": [\r                            {\r                                \"kind\": 8366,\r                                \"ellipsis\": false,\r                                \"binding\": {\r                                    \"kind\": 131102,\r                                    \"text\": \"arg\",\r                                    \"rawText\": \"arg\",\r                                    \"flags\": 0,\r                                    \"intersects\": false,\r                                    \"transformFlags\": 1025,\r                                    \"start\": 422,\r                                    \"end\": 425\r                                },\r                                \"isOptional\": false,\r                                \"type\": null,\r                                \"initializer\": null,\r                                \"accessModifier\": null,\r                                \"isReadOnly\": false,\r                                \"flags\": 0,\r                                \"intersects\": false,\r                                \"transformFlags\": 1,\r                                \"start\": 422,\r                                \"end\": 425\r                            }\r                        ],\r                        \"trailingcomma\": false,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 422,\r                        \"end\": 425\r                    },\r                    \"returnType\": {\r                        \"kind\": 4202498,\r                        \"flags\": 0,\r                        \"intersects\": false,\r                        \"transformFlags\": 2097152,\r                        \"start\": 429,\r                        \"end\": 433\r                    },\r                    \"flags\": 0,\r                    \"intersects\": false,\r                    \"transformFlags\": 2097152,\r                    \"start\": 404,\r                    \"end\": 433\r                },\r                \"typeParameters\": null,\r                \"flags\": 16384,\r                \"intersects\": false,\r                \"transformFlags\": 2097152,\r                \"start\": 395,\r                \"end\": 434\r            }\r        ],\r        \"transformFlags\": 0,\r        \"flags\": 0,\r        \"intersects\": false,\r        \"start\": 0,\r        \"end\": 434\r    },\r    \"jsx\": false,\r    \"printable\": true,\r    \"diagnostics\": [],\r    \"incremental\": false,\r    \"flags\": 0,\r    \"intersects\": false,\r    \"transformFlags\": 0,\r    \"start\": 0,\r    \"end\": 434\r}\r",
                        "rawText": "javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"functionName<A /* A comment */>();\\nconst a: T</* comment */> = 1;\\nfunctionName</* comment */>();\\nfunction foo</* comment */>() {}\\ninterface Foo {\\n </* comment */>(arg): any;\\n}\\ntype T = </* comment */>(arg) => any;\\n\\nfunctionName<\\n  A // comment\\n>();\\nconst a: T<\\n  // comment\\n> = 1;\\nfunctionName<\\n  // comment\\n>();\\nfunction foo<\\n  // comment\\n>() {}\\ninterface Foo {\\n <\\n  A// comment\\n >(arg): any;\\n}\\ntype T = <\\n  // comment\\n>(arg) => any;\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 0,\r\n                        \"end\": 12\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [\r\n                            {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"A\",\r\n                                    \"rawText\": \"A\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 14\r\n                                },\r\n                                \"typeArguments\": null,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 13,\r\n                                \"end\": 31\r\n                            }\r\n                        ],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 13,\r\n                        \"end\": 31\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 32,\r\n                        \"end\": 32\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 12,\r\n                    \"end\": 33\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            },\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 40,\r\n                                \"end\": 42\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"T\",\r\n                                    \"rawText\": \"T\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 43,\r\n                                    \"end\": 45\r\n                                },\r\n                                \"typeArguments\": {\r\n                                    \"kind\": 8419,\r\n                                    \"typeArgumentsList\": [],\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 2097152,\r\n                                    \"start\": 46,\r\n                                    \"end\": 46\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 43,\r\n                                \"end\": 62\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 62,\r\n                                \"end\": 64\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 40,\r\n                            \"end\": 64\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 40,\r\n                    \"end\": 64\r\n                },\r\n                \"flags\": 16400,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 34,\r\n                \"end\": 65\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 65,\r\n                        \"end\": 78\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 79,\r\n                        \"end\": 93\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 94,\r\n                        \"end\": 94\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 78,\r\n                    \"end\": 95\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 65,\r\n                \"end\": 96\r\n            },\r\n            {\r\n                \"kind\": 264284,\r\n                \"name\": {\r\n                    \"kind\": 131102,\r\n                    \"text\": \"foo\",\r\n                    \"rawText\": \"foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 1025,\r\n                    \"start\": 105,\r\n                    \"end\": 109\r\n                },\r\n                \"formalParameters\": {\r\n                    \"kind\": 90,\r\n                    \"formalParameterList\": [],\r\n                    \"trailingComma\": false,\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 125,\r\n                    \"end\": 126\r\n                },\r\n                \"type\": null,\r\n                \"contents\": {\r\n                    \"kind\": 91,\r\n                    \"functionStatementList\": {\r\n                        \"kind\": 94,\r\n                        \"statements\": [],\r\n                        \"multiline\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 128,\r\n                        \"end\": 128\r\n                    },\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 126,\r\n                    \"end\": 129\r\n                },\r\n                \"typeParameters\": {\r\n                    \"kind\": 8425,\r\n                    \"typeParameterList\": [],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 110,\r\n                    \"end\": 110\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 256,\r\n                \"start\": 96,\r\n                \"end\": 129\r\n            },\r\n            {\r\n                \"kind\": 8311,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"Foo\",\r\n                    \"rawText\": \"Foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 139,\r\n                    \"end\": 143\r\n                },\r\n                \"typeParameters\": null,\r\n                \"heritageClauses\": null,\r\n                \"objectTypeMembers\": {\r\n                    \"kind\": 169,\r\n                    \"members\": [\r\n                        {\r\n                            \"kind\": 8236,\r\n                            \"isReadOnly\": false,\r\n                            \"accessModifier\": null,\r\n                            \"typeParameters\": {\r\n                                \"kind\": 8425,\r\n                                \"typeParameterList\": [],\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 148,\r\n                                \"end\": 148\r\n                            },\r\n                            \"parameters\": {\r\n                                \"kind\": 8367,\r\n                                \"parameterList\": [\r\n                                    {\r\n                                        \"kind\": 8366,\r\n                                        \"ellipsis\": false,\r\n                                        \"binding\": {\r\n                                            \"kind\": 131102,\r\n                                            \"text\": \"arg\",\r\n                                            \"rawText\": \"arg\",\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 1025,\r\n                                            \"start\": 163,\r\n                                            \"end\": 166\r\n                                        },\r\n                                        \"isOptional\": false,\r\n                                        \"type\": null,\r\n                                        \"initializer\": null,\r\n                                        \"accessModifier\": null,\r\n                                        \"isReadOnly\": false,\r\n                                        \"flags\": 0,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 1,\r\n                                        \"start\": 163,\r\n                                        \"end\": 166\r\n                                    }\r\n                                ],\r\n                                \"trailingcomma\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 163,\r\n                                \"end\": 166\r\n                            },\r\n                            \"returnType\": {\r\n                                \"kind\": 4202498,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 168,\r\n                                \"end\": 172\r\n                            },\r\n                            \"flags\": 16384,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 2097152,\r\n                            \"start\": 145,\r\n                            \"end\": 173\r\n                        }\r\n                    ],\r\n                    \"multiline\": true,\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 145,\r\n                    \"end\": 173\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 129,\r\n                \"end\": 175\r\n            },\r\n            {\r\n                \"kind\": 8417,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"T\",\r\n                    \"rawText\": \"T\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 180,\r\n                    \"end\": 182\r\n                },\r\n                \"type\": {\r\n                    \"kind\": 8287,\r\n                    \"typeParameters\": {\r\n                        \"kind\": 8425,\r\n                        \"typeParameterList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 186,\r\n                        \"end\": 186\r\n                    },\r\n                    \"parameters\": {\r\n                        \"kind\": 8367,\r\n                        \"parameterList\": [\r\n                            {\r\n                                \"kind\": 8366,\r\n                                \"ellipsis\": false,\r\n                                \"binding\": {\r\n                                    \"kind\": 131102,\r\n                                    \"text\": \"arg\",\r\n                                    \"rawText\": \"arg\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 1025,\r\n                                    \"start\": 201,\r\n                                    \"end\": 204\r\n                                },\r\n                                \"isOptional\": false,\r\n                                \"type\": null,\r\n                                \"initializer\": null,\r\n                                \"accessModifier\": null,\r\n                                \"isReadOnly\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1,\r\n                                \"start\": 201,\r\n                                \"end\": 204\r\n                            }\r\n                        ],\r\n                        \"trailingcomma\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 201,\r\n                        \"end\": 204\r\n                    },\r\n                    \"returnType\": {\r\n                        \"kind\": 4202498,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 208,\r\n                        \"end\": 212\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 184,\r\n                    \"end\": 212\r\n                },\r\n                \"typeParameters\": null,\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 175,\r\n                \"end\": 213\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 213,\r\n                        \"end\": 227\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [\r\n                            {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"A\",\r\n                                    \"rawText\": \"A\",\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 228,\r\n                                    \"end\": 232\r\n                                },\r\n                                \"typeArguments\": null,\r\n                                \"flags\": 16384,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 228,\r\n                                \"end\": 245\r\n                            }\r\n                        ],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 228,\r\n                        \"end\": 245\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 246,\r\n                        \"end\": 246\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 227,\r\n                    \"end\": 247\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 213,\r\n                \"end\": 248\r\n            },\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 254,\r\n                                \"end\": 256\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"T\",\r\n                                    \"rawText\": \"T\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 257,\r\n                                    \"end\": 259\r\n                                },\r\n                                \"typeArguments\": {\r\n                                    \"kind\": 8419,\r\n                                    \"typeArgumentsList\": [],\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 2097152,\r\n                                    \"start\": 260,\r\n                                    \"end\": 260\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 257,\r\n                                \"end\": 277\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 277,\r\n                                \"end\": 279\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 254,\r\n                            \"end\": 279\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 254,\r\n                    \"end\": 279\r\n                },\r\n                \"flags\": 16400,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 248,\r\n                \"end\": 280\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 280,\r\n                        \"end\": 293\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 294,\r\n                        \"end\": 309\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 310,\r\n                        \"end\": 310\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 293,\r\n                    \"end\": 311\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 280,\r\n                \"end\": 312\r\n            },\r\n            {\r\n                \"kind\": 264284,\r\n                \"name\": {\r\n                    \"kind\": 131102,\r\n                    \"text\": \"foo\",\r\n                    \"rawText\": \"foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 1025,\r\n                    \"start\": 321,\r\n                    \"end\": 325\r\n                },\r\n                \"formalParameters\": {\r\n                    \"kind\": 90,\r\n                    \"formalParameterList\": [],\r\n                    \"trailingComma\": false,\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 342,\r\n                    \"end\": 343\r\n                },\r\n                \"type\": null,\r\n                \"contents\": {\r\n                    \"kind\": 91,\r\n                    \"functionStatementList\": {\r\n                        \"kind\": 94,\r\n                        \"statements\": [],\r\n                        \"multiline\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 345,\r\n                        \"end\": 345\r\n                    },\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 343,\r\n                    \"end\": 346\r\n                },\r\n                \"typeParameters\": {\r\n                    \"kind\": 8425,\r\n                    \"typeParameterList\": [],\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 326,\r\n                    \"end\": 326\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 256,\r\n                \"start\": 312,\r\n                \"end\": 346\r\n            },\r\n            {\r\n                \"kind\": 8311,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"Foo\",\r\n                    \"rawText\": \"Foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 356,\r\n                    \"end\": 360\r\n                },\r\n                \"typeParameters\": null,\r\n                \"heritageClauses\": null,\r\n                \"objectTypeMembers\": {\r\n                    \"kind\": 169,\r\n                    \"members\": [\r\n                        {\r\n                            \"kind\": 8236,\r\n                            \"isReadOnly\": false,\r\n                            \"accessModifier\": null,\r\n                            \"typeParameters\": {\r\n                                \"kind\": 8425,\r\n                                \"typeParameterList\": [\r\n                                    {\r\n                                        \"kind\": 8424,\r\n                                        \"name\": {\r\n                                            \"kind\": 196711,\r\n                                            \"text\": \"A\",\r\n                                            \"rawText\": \"A\",\r\n                                            \"flags\": 16384,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 0,\r\n                                            \"start\": 365,\r\n                                            \"end\": 369\r\n                                        },\r\n                                        \"constraint\": null,\r\n                                        \"defaultType\": null,\r\n                                        \"expression\": null,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 2097152,\r\n                                        \"start\": 365,\r\n                                        \"end\": 369\r\n                                    }\r\n                                ],\r\n                                \"flags\": 16384,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 365,\r\n                                \"end\": 369\r\n                            },\r\n                            \"parameters\": {\r\n                                \"kind\": 8367,\r\n                                \"parameterList\": [\r\n                                    {\r\n                                        \"kind\": 8366,\r\n                                        \"ellipsis\": false,\r\n                                        \"binding\": {\r\n                                            \"kind\": 131102,\r\n                                            \"text\": \"arg\",\r\n                                            \"rawText\": \"arg\",\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 1025,\r\n                                            \"start\": 383,\r\n                                            \"end\": 386\r\n                                        },\r\n                                        \"isOptional\": false,\r\n                                        \"type\": null,\r\n                                        \"initializer\": null,\r\n                                        \"accessModifier\": null,\r\n                                        \"isReadOnly\": false,\r\n                                        \"flags\": 0,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 1,\r\n                                        \"start\": 383,\r\n                                        \"end\": 386\r\n                                    }\r\n                                ],\r\n                                \"trailingcomma\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 383,\r\n                                \"end\": 386\r\n                            },\r\n                            \"returnType\": {\r\n                                \"kind\": 4202498,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 388,\r\n                                \"end\": 392\r\n                            },\r\n                            \"flags\": 16384,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 2097152,\r\n                            \"start\": 362,\r\n                            \"end\": 393\r\n                        }\r\n                    ],\r\n                    \"multiline\": true,\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 362,\r\n                    \"end\": 393\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 346,\r\n                \"end\": 395\r\n            },\r\n            {\r\n                \"kind\": 8417,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"T\",\r\n                    \"rawText\": \"T\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 400,\r\n                    \"end\": 402\r\n                },\r\n                \"type\": {\r\n                    \"kind\": 8287,\r\n                    \"typeParameters\": {\r\n                        \"kind\": 8425,\r\n                        \"typeParameterList\": [],\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 406,\r\n                        \"end\": 406\r\n                    },\r\n                    \"parameters\": {\r\n                        \"kind\": 8367,\r\n                        \"parameterList\": [\r\n                            {\r\n                                \"kind\": 8366,\r\n                                \"ellipsis\": false,\r\n                                \"binding\": {\r\n                                    \"kind\": 131102,\r\n                                    \"text\": \"arg\",\r\n                                    \"rawText\": \"arg\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 1025,\r\n                                    \"start\": 422,\r\n                                    \"end\": 425\r\n                                },\r\n                                \"isOptional\": false,\r\n                                \"type\": null,\r\n                                \"initializer\": null,\r\n                                \"accessModifier\": null,\r\n                                \"isReadOnly\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1,\r\n                                \"start\": 422,\r\n                                \"end\": 425\r\n                            }\r\n                        ],\r\n                        \"trailingcomma\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 422,\r\n                        \"end\": 425\r\n                    },\r\n                    \"returnType\": {\r\n                        \"kind\": 4202498,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 429,\r\n                        \"end\": 433\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 404,\r\n                    \"end\": 433\r\n                },\r\n                \"typeParameters\": null,\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 395,\r\n                \"end\": 434\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 434\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 434\r\n}\r\n",
                        "flags": 768,
                        "start": 551,
                        "end": 36451
                    },
                    "flags": 256,
                    "start": 539,
                    "end": 36451
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 36451,
                    "end": 36453
                },
                "flags": 256,
                "start": 539,
                "end": 36453
            },
            "flags": 128,
            "start": 539,
            "end": 36453
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Printed",
                            "rawText": "Printed",
                            "flags": 768,
                            "start": 36460,
                            "end": 36468
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 36468,
                            "end": 36476
                        },
                        "flags": 256,
                        "start": 36460,
                        "end": 36476
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r@{x2716}@ Soon to be open sourced\r",
                        "rawText": "javascript\r\n@{x2716}@ Soon to be open sourced\r\n",
                        "flags": 768,
                        "start": 36476,
                        "end": 36517
                    },
                    "flags": 256,
                    "start": 36460,
                    "end": 36517
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 36517,
                    "end": 36519
                },
                "flags": 256,
                "start": 36460,
                "end": 36519
            },
            "flags": 128,
            "start": 36460,
            "end": 36519
        },
        {
            "kind": 120,
            "expression": {
                "kind": 226,
                "member": {
                    "kind": 226,
                    "member": {
                        "kind": 226,
                        "member": {
                            "kind": 134299649,
                            "text": "Diagnostics",
                            "rawText": "Diagnostics",
                            "flags": 768,
                            "start": 36526,
                            "end": 36538
                        },
                        "template": {
                            "kind": 458761,
                            "text": "",
                            "rawText": "",
                            "flags": 768,
                            "start": 36538,
                            "end": 36546
                        },
                        "flags": 256,
                        "start": 36526,
                        "end": 36546
                    },
                    "template": {
                        "kind": 458761,
                        "text": "javascript\r\r",
                        "rawText": "javascript\r\n\r\n",
                        "flags": 768,
                        "start": 36546,
                        "end": 36562
                    },
                    "flags": 256,
                    "start": 36526,
                    "end": 36562
                },
                "template": {
                    "kind": 458761,
                    "text": "",
                    "rawText": "",
                    "flags": 768,
                    "start": 36562,
                    "end": 36564
                },
                "flags": 256,
                "start": 36526,
                "end": 36564
            },
            "flags": 128,
            "start": 36526,
            "end": 36564
        }
    ],
    "isModule": false,
    "text": "parser test case\r\n\r\n## Input\r\n\r\n`````js\r\nfunctionName<A /* A comment */>();\r\nconst a: T</* comment */> = 1;\r\nfunctionName</* comment */>();\r\nfunction foo</* comment */>() {}\r\ninterface Foo {\r\n </* comment */>(arg): any;\r\n}\r\ntype T = </* comment */>(arg) => any;\r\n\r\nfunctionName<\r\n  A // comment\r\n>();\r\nconst a: T<\r\n  // comment\r\n> = 1;\r\nfunctionName<\r\n  // comment\r\n>();\r\nfunction foo<\r\n  // comment\r\n>() {}\r\ninterface Foo {\r\n <\r\n  A// comment\r\n >(arg): any;\r\n}\r\ntype T = <\r\n  // comment\r\n>(arg) => any;\r\n`````\r\n\r\n## Output\r\n\r\n\r\n### Hybrid CST\r\n\r\n\r\n```javascript\r\n{\r\n    \"kind\": 196,\r\n    \"source\": \"functionName<A /* A comment */>();\\nconst a: T</* comment */> = 1;\\nfunctionName</* comment */>();\\nfunction foo</* comment */>() {}\\ninterface Foo {\\n </* comment */>(arg): any;\\n}\\ntype T = </* comment */>(arg) => any;\\n\\nfunctionName<\\n  A // comment\\n>();\\nconst a: T<\\n  // comment\\n> = 1;\\nfunctionName<\\n  // comment\\n>();\\nfunction foo<\\n  // comment\\n>() {}\\ninterface Foo {\\n <\\n  A// comment\\n >(arg): any;\\n}\\ntype T = <\\n  // comment\\n>(arg) => any;\",\r\n    \"filename\": \"\",\r\n    \"scriptBody\": {\r\n        \"kind\": 197,\r\n        \"statements\": [\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 0,\r\n                        \"end\": 12\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [\r\n                            {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"A\",\r\n                                    \"rawText\": \"A\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 13,\r\n                                    \"end\": 14\r\n                                },\r\n                                \"typeArguments\": null,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 13,\r\n                                \"end\": 31\r\n                            }\r\n                        ],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 13,\r\n                        \"end\": 31\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 32,\r\n                        \"end\": 32\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 12,\r\n                    \"end\": 33\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 0,\r\n                \"end\": 34\r\n            },\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 40,\r\n                                \"end\": 42\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"T\",\r\n                                    \"rawText\": \"T\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 43,\r\n                                    \"end\": 45\r\n                                },\r\n                                \"typeArguments\": {\r\n                                    \"kind\": 8419,\r\n                                    \"typeArgumentsList\": [],\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 2097152,\r\n                                    \"start\": 46,\r\n                                    \"end\": 46\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 43,\r\n                                \"end\": 62\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 62,\r\n                                \"end\": 64\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 40,\r\n                            \"end\": 64\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 40,\r\n                    \"end\": 64\r\n                },\r\n                \"flags\": 16400,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 34,\r\n                \"end\": 65\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 65,\r\n                        \"end\": 78\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 79,\r\n                        \"end\": 93\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 94,\r\n                        \"end\": 94\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 78,\r\n                    \"end\": 95\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 65,\r\n                \"end\": 96\r\n            },\r\n            {\r\n                \"kind\": 264284,\r\n                \"name\": {\r\n                    \"kind\": 131102,\r\n                    \"text\": \"foo\",\r\n                    \"rawText\": \"foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 1025,\r\n                    \"start\": 105,\r\n                    \"end\": 109\r\n                },\r\n                \"formalParameters\": {\r\n                    \"kind\": 90,\r\n                    \"formalParameterList\": [],\r\n                    \"trailingComma\": false,\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 125,\r\n                    \"end\": 126\r\n                },\r\n                \"type\": null,\r\n                \"contents\": {\r\n                    \"kind\": 91,\r\n                    \"functionStatementList\": {\r\n                        \"kind\": 94,\r\n                        \"statements\": [],\r\n                        \"multiline\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 128,\r\n                        \"end\": 128\r\n                    },\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 126,\r\n                    \"end\": 129\r\n                },\r\n                \"typeParameters\": {\r\n                    \"kind\": 8425,\r\n                    \"typeParameterList\": [],\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 110,\r\n                    \"end\": 110\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 256,\r\n                \"start\": 96,\r\n                \"end\": 129\r\n            },\r\n            {\r\n                \"kind\": 8311,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"Foo\",\r\n                    \"rawText\": \"Foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 139,\r\n                    \"end\": 143\r\n                },\r\n                \"typeParameters\": null,\r\n                \"heritageClauses\": null,\r\n                \"objectTypeMembers\": {\r\n                    \"kind\": 169,\r\n                    \"members\": [\r\n                        {\r\n                            \"kind\": 8236,\r\n                            \"isReadOnly\": false,\r\n                            \"accessModifier\": null,\r\n                            \"typeParameters\": {\r\n                                \"kind\": 8425,\r\n                                \"typeParameterList\": [],\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 148,\r\n                                \"end\": 148\r\n                            },\r\n                            \"parameters\": {\r\n                                \"kind\": 8367,\r\n                                \"parameterList\": [\r\n                                    {\r\n                                        \"kind\": 8366,\r\n                                        \"ellipsis\": false,\r\n                                        \"binding\": {\r\n                                            \"kind\": 131102,\r\n                                            \"text\": \"arg\",\r\n                                            \"rawText\": \"arg\",\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 1025,\r\n                                            \"start\": 163,\r\n                                            \"end\": 166\r\n                                        },\r\n                                        \"isOptional\": false,\r\n                                        \"type\": null,\r\n                                        \"initializer\": null,\r\n                                        \"accessModifier\": null,\r\n                                        \"isReadOnly\": false,\r\n                                        \"flags\": 0,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 1,\r\n                                        \"start\": 163,\r\n                                        \"end\": 166\r\n                                    }\r\n                                ],\r\n                                \"trailingcomma\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 163,\r\n                                \"end\": 166\r\n                            },\r\n                            \"returnType\": {\r\n                                \"kind\": 4202498,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 168,\r\n                                \"end\": 172\r\n                            },\r\n                            \"flags\": 16384,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 2097152,\r\n                            \"start\": 145,\r\n                            \"end\": 173\r\n                        }\r\n                    ],\r\n                    \"multiline\": true,\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 145,\r\n                    \"end\": 173\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 129,\r\n                \"end\": 175\r\n            },\r\n            {\r\n                \"kind\": 8417,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"T\",\r\n                    \"rawText\": \"T\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 180,\r\n                    \"end\": 182\r\n                },\r\n                \"type\": {\r\n                    \"kind\": 8287,\r\n                    \"typeParameters\": {\r\n                        \"kind\": 8425,\r\n                        \"typeParameterList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 186,\r\n                        \"end\": 186\r\n                    },\r\n                    \"parameters\": {\r\n                        \"kind\": 8367,\r\n                        \"parameterList\": [\r\n                            {\r\n                                \"kind\": 8366,\r\n                                \"ellipsis\": false,\r\n                                \"binding\": {\r\n                                    \"kind\": 131102,\r\n                                    \"text\": \"arg\",\r\n                                    \"rawText\": \"arg\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 1025,\r\n                                    \"start\": 201,\r\n                                    \"end\": 204\r\n                                },\r\n                                \"isOptional\": false,\r\n                                \"type\": null,\r\n                                \"initializer\": null,\r\n                                \"accessModifier\": null,\r\n                                \"isReadOnly\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1,\r\n                                \"start\": 201,\r\n                                \"end\": 204\r\n                            }\r\n                        ],\r\n                        \"trailingcomma\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 201,\r\n                        \"end\": 204\r\n                    },\r\n                    \"returnType\": {\r\n                        \"kind\": 4202498,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 208,\r\n                        \"end\": 212\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 184,\r\n                    \"end\": 212\r\n                },\r\n                \"typeParameters\": null,\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 175,\r\n                \"end\": 213\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 213,\r\n                        \"end\": 227\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [\r\n                            {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"A\",\r\n                                    \"rawText\": \"A\",\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 228,\r\n                                    \"end\": 232\r\n                                },\r\n                                \"typeArguments\": null,\r\n                                \"flags\": 16384,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 228,\r\n                                \"end\": 245\r\n                            }\r\n                        ],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 228,\r\n                        \"end\": 245\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 246,\r\n                        \"end\": 246\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 227,\r\n                    \"end\": 247\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 213,\r\n                \"end\": 248\r\n            },\r\n            {\r\n                \"kind\": 142,\r\n                \"isConst\": true,\r\n                \"binding\": {\r\n                    \"kind\": 31,\r\n                    \"bindingList\": [\r\n                        {\r\n                            \"kind\": 141,\r\n                            \"binding\": {\r\n                                \"kind\": 131102,\r\n                                \"text\": \"a\",\r\n                                \"rawText\": \"a\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1025,\r\n                                \"start\": 254,\r\n                                \"end\": 256\r\n                            },\r\n                            \"exclamation\": false,\r\n                            \"type\": {\r\n                                \"kind\": 8428,\r\n                                \"typeName\": {\r\n                                    \"kind\": 196711,\r\n                                    \"text\": \"T\",\r\n                                    \"rawText\": \"T\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 0,\r\n                                    \"start\": 257,\r\n                                    \"end\": 259\r\n                                },\r\n                                \"typeArguments\": {\r\n                                    \"kind\": 8419,\r\n                                    \"typeArgumentsList\": [],\r\n                                    \"flags\": 16384,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 2097152,\r\n                                    \"start\": 260,\r\n                                    \"end\": 260\r\n                                },\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 257,\r\n                                \"end\": 277\r\n                            },\r\n                            \"initializer\": {\r\n                                \"kind\": 4261540,\r\n                                \"text\": 1,\r\n                                \"rawText\": \"1\",\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 0,\r\n                                \"start\": 277,\r\n                                \"end\": 279\r\n                            },\r\n                            \"flags\": 0,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 0,\r\n                            \"start\": 254,\r\n                            \"end\": 279\r\n                        }\r\n                    ],\r\n                    \"flags\": 16,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 254,\r\n                    \"end\": 279\r\n                },\r\n                \"flags\": 16400,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 769,\r\n                \"start\": 248,\r\n                \"end\": 280\r\n            },\r\n            {\r\n                \"kind\": 2097233,\r\n                \"expression\": {\r\n                    \"kind\": 66091,\r\n                    \"expression\": {\r\n                        \"kind\": 196712,\r\n                        \"text\": \"functionName\",\r\n                        \"rawText\": \"functionName\",\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 280,\r\n                        \"end\": 293\r\n                    },\r\n                    \"typeArguments\": {\r\n                        \"kind\": 8419,\r\n                        \"typeArgumentsList\": [],\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 294,\r\n                        \"end\": 309\r\n                    },\r\n                    \"argumentList\": {\r\n                        \"kind\": 3,\r\n                        \"elements\": [],\r\n                        \"trailingComma\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"start\": 310,\r\n                        \"end\": 310\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 293,\r\n                    \"end\": 311\r\n                },\r\n                \"flags\": 0,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 0,\r\n                \"start\": 280,\r\n                \"end\": 312\r\n            },\r\n            {\r\n                \"kind\": 264284,\r\n                \"name\": {\r\n                    \"kind\": 131102,\r\n                    \"text\": \"foo\",\r\n                    \"rawText\": \"foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 1025,\r\n                    \"start\": 321,\r\n                    \"end\": 325\r\n                },\r\n                \"formalParameters\": {\r\n                    \"kind\": 90,\r\n                    \"formalParameterList\": [],\r\n                    \"trailingComma\": false,\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 342,\r\n                    \"end\": 343\r\n                },\r\n                \"type\": null,\r\n                \"contents\": {\r\n                    \"kind\": 91,\r\n                    \"functionStatementList\": {\r\n                        \"kind\": 94,\r\n                        \"statements\": [],\r\n                        \"multiline\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 0,\r\n                        \"start\": 345,\r\n                        \"end\": 345\r\n                    },\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 343,\r\n                    \"end\": 346\r\n                },\r\n                \"typeParameters\": {\r\n                    \"kind\": 8425,\r\n                    \"typeParameterList\": [],\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 326,\r\n                    \"end\": 326\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 256,\r\n                \"start\": 312,\r\n                \"end\": 346\r\n            },\r\n            {\r\n                \"kind\": 8311,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"Foo\",\r\n                    \"rawText\": \"Foo\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 356,\r\n                    \"end\": 360\r\n                },\r\n                \"typeParameters\": null,\r\n                \"heritageClauses\": null,\r\n                \"objectTypeMembers\": {\r\n                    \"kind\": 169,\r\n                    \"members\": [\r\n                        {\r\n                            \"kind\": 8236,\r\n                            \"isReadOnly\": false,\r\n                            \"accessModifier\": null,\r\n                            \"typeParameters\": {\r\n                                \"kind\": 8425,\r\n                                \"typeParameterList\": [\r\n                                    {\r\n                                        \"kind\": 8424,\r\n                                        \"name\": {\r\n                                            \"kind\": 196711,\r\n                                            \"text\": \"A\",\r\n                                            \"rawText\": \"A\",\r\n                                            \"flags\": 16384,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 0,\r\n                                            \"start\": 365,\r\n                                            \"end\": 369\r\n                                        },\r\n                                        \"constraint\": null,\r\n                                        \"defaultType\": null,\r\n                                        \"expression\": null,\r\n                                        \"flags\": 16384,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 2097152,\r\n                                        \"start\": 365,\r\n                                        \"end\": 369\r\n                                    }\r\n                                ],\r\n                                \"flags\": 16384,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 365,\r\n                                \"end\": 369\r\n                            },\r\n                            \"parameters\": {\r\n                                \"kind\": 8367,\r\n                                \"parameterList\": [\r\n                                    {\r\n                                        \"kind\": 8366,\r\n                                        \"ellipsis\": false,\r\n                                        \"binding\": {\r\n                                            \"kind\": 131102,\r\n                                            \"text\": \"arg\",\r\n                                            \"rawText\": \"arg\",\r\n                                            \"flags\": 0,\r\n                                            \"intersects\": false,\r\n                                            \"transformFlags\": 1025,\r\n                                            \"start\": 383,\r\n                                            \"end\": 386\r\n                                        },\r\n                                        \"isOptional\": false,\r\n                                        \"type\": null,\r\n                                        \"initializer\": null,\r\n                                        \"accessModifier\": null,\r\n                                        \"isReadOnly\": false,\r\n                                        \"flags\": 0,\r\n                                        \"intersects\": false,\r\n                                        \"transformFlags\": 1,\r\n                                        \"start\": 383,\r\n                                        \"end\": 386\r\n                                    }\r\n                                ],\r\n                                \"trailingcomma\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 383,\r\n                                \"end\": 386\r\n                            },\r\n                            \"returnType\": {\r\n                                \"kind\": 4202498,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 2097152,\r\n                                \"start\": 388,\r\n                                \"end\": 392\r\n                            },\r\n                            \"flags\": 16384,\r\n                            \"intersects\": false,\r\n                            \"transformFlags\": 2097152,\r\n                            \"start\": 362,\r\n                            \"end\": 393\r\n                        }\r\n                    ],\r\n                    \"multiline\": true,\r\n                    \"flags\": 16384,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 362,\r\n                    \"end\": 393\r\n                },\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 346,\r\n                \"end\": 395\r\n            },\r\n            {\r\n                \"kind\": 8417,\r\n                \"name\": {\r\n                    \"kind\": 196712,\r\n                    \"text\": \"T\",\r\n                    \"rawText\": \"T\",\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 0,\r\n                    \"start\": 400,\r\n                    \"end\": 402\r\n                },\r\n                \"type\": {\r\n                    \"kind\": 8287,\r\n                    \"typeParameters\": {\r\n                        \"kind\": 8425,\r\n                        \"typeParameterList\": [],\r\n                        \"flags\": 16384,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 406,\r\n                        \"end\": 406\r\n                    },\r\n                    \"parameters\": {\r\n                        \"kind\": 8367,\r\n                        \"parameterList\": [\r\n                            {\r\n                                \"kind\": 8366,\r\n                                \"ellipsis\": false,\r\n                                \"binding\": {\r\n                                    \"kind\": 131102,\r\n                                    \"text\": \"arg\",\r\n                                    \"rawText\": \"arg\",\r\n                                    \"flags\": 0,\r\n                                    \"intersects\": false,\r\n                                    \"transformFlags\": 1025,\r\n                                    \"start\": 422,\r\n                                    \"end\": 425\r\n                                },\r\n                                \"isOptional\": false,\r\n                                \"type\": null,\r\n                                \"initializer\": null,\r\n                                \"accessModifier\": null,\r\n                                \"isReadOnly\": false,\r\n                                \"flags\": 0,\r\n                                \"intersects\": false,\r\n                                \"transformFlags\": 1,\r\n                                \"start\": 422,\r\n                                \"end\": 425\r\n                            }\r\n                        ],\r\n                        \"trailingcomma\": false,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 422,\r\n                        \"end\": 425\r\n                    },\r\n                    \"returnType\": {\r\n                        \"kind\": 4202498,\r\n                        \"flags\": 0,\r\n                        \"intersects\": false,\r\n                        \"transformFlags\": 2097152,\r\n                        \"start\": 429,\r\n                        \"end\": 433\r\n                    },\r\n                    \"flags\": 0,\r\n                    \"intersects\": false,\r\n                    \"transformFlags\": 2097152,\r\n                    \"start\": 404,\r\n                    \"end\": 433\r\n                },\r\n                \"typeParameters\": null,\r\n                \"flags\": 16384,\r\n                \"intersects\": false,\r\n                \"transformFlags\": 2097152,\r\n                \"start\": 395,\r\n                \"end\": 434\r\n            }\r\n        ],\r\n        \"transformFlags\": 0,\r\n        \"flags\": 0,\r\n        \"intersects\": false,\r\n        \"start\": 0,\r\n        \"end\": 434\r\n    },\r\n    \"jsx\": false,\r\n    \"printable\": true,\r\n    \"diagnostics\": [],\r\n    \"incremental\": false,\r\n    \"flags\": 0,\r\n    \"intersects\": false,\r\n    \"transformFlags\": 0,\r\n    \"start\": 0,\r\n    \"end\": 434\r\n}\r\n```\r\n\r\n### Printed\r\n\r\n\r\n```javascript\r\n@{x2716}@ Soon to be open sourced\r\n```\r\n\r\n### Diagnostics\r\n\r\n\r\n```javascript\r\n\r\n```\r\n\r",
    "fileName": "__root__",
    "flags": 0,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 6,
            "end": 11
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 11,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 5,
            "error": "Statement expected",
            "start": 11,
            "end": 16
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 16,
            "end": 21
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 21,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 21,
            "end": 22
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 510,
            "end": 515
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 510,
            "end": 515
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 515,
            "end": 516
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 515,
            "end": 516
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 523,
            "end": 530
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 523,
            "end": 530
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 530,
            "end": 531
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 530,
            "end": 531
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 531,
            "end": 532
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 531,
            "end": 532
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 539,
            "end": 543
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36453,
            "end": 36458
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36453,
            "end": 36458
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36458,
            "end": 36459
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36458,
            "end": 36459
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36459,
            "end": 36460
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36459,
            "end": 36460
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36519,
            "end": 36524
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36519,
            "end": 36524
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36524,
            "end": 36525
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36524,
            "end": 36525
        },
        {
            "kind": 2,
            "source": 2,
            "code": 1,
            "error": "Unexpected token.",
            "start": 36525,
            "end": 36526
        },
        {
            "kind": 2,
            "source": 2,
            "code": 69,
            "error": "Private identifiers are not allowed outside class_bodies",
            "start": 36525,
            "end": 36526
        }
    ],
    "start": 0,
    "end": 36567
}
```

### Printed

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
functionName<A /* A comment */>();@{xd}@
const a: T</* comment */> = 1;@{xd}@
functionName</* comment */>();@{xd}@
function foo</* comment */>() {}@{xd}@
interface Foo {@{xd}@
 </* comment */>(arg): any;@{xd}@
}@{xd}@
type T = </* comment */>(arg) => any;@{xd}@
@{xd}@
functionName<@{xd}@
  A // comment@{xd}@
>();@{xd}@
const a: T<@{xd}@
  // comment@{xd}@
> = 1;@{xd}@
functionName<@{xd}@
  // comment@{xd}@
>();@{xd}@
function foo<@{xd}@
  // comment@{xd}@
>() {}@{xd}@
interface Foo {@{xd}@
 <@{xd}@
  A// comment@{xd}@
 >(arg): any;@{xd}@
}@{xd}@
type T = <@{xd}@
  // comment@{xd}@
>(arg) => any;@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "functionName<A /* A comment */>();\nconst a: T</* comment */> = 1;\nfunctionName</* comment */>();\nfunction foo</* comment */>() {}\ninterface Foo {\n </* comment */>(arg): any;\n}\ntype T = </* comment */>(arg) => any;\n\nfunctionName<\n  A // comment\n>();\nconst a: T<\n  // comment\n> = 1;\nfunctionName<\n  // comment\n>();\nfunction foo<\n  // comment\n>() {}\ninterface Foo {\n <\n  A// comment\n >(arg): any;\n}\ntype T = <\n  // comment\n>(arg) => any;",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 0,@{xd}@
                        "end": 12@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 14@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 13,@{xd}@
                                "end": 31@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 13,@{xd}@
                        "end": 31@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 32,@{xd}@
                        "end": 32@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 12,@{xd}@
                    "end": 33@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 40,@{xd}@
                                "end": 42@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 43,@{xd}@
                                    "end": 45@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 46,@{xd}@
                                    "end": 46@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 43,@{xd}@
                                "end": 62@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 62,@{xd}@
                                "end": 64@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 40,@{xd}@
                            "end": 64@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 40,@{xd}@
                    "end": 64@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 34,@{xd}@
                "end": 65@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 65,@{xd}@
                        "end": 78@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 79,@{xd}@
                        "end": 93@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 94,@{xd}@
                        "end": 94@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 78,@{xd}@
                    "end": 95@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 65,@{xd}@
                "end": 96@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 105,@{xd}@
                    "end": 109@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 125,@{xd}@
                    "end": 126@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 128,@{xd}@
                        "end": 128@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 126,@{xd}@
                    "end": 129@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 110,@{xd}@
                    "end": 110@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 96,@{xd}@
                "end": 129@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 139,@{xd}@
                    "end": 143@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [],@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 148,@{xd}@
                                "end": 148@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 163,@{xd}@
                                            "end": 166@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 163,@{xd}@
                                        "end": 166@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 163,@{xd}@
                                "end": 166@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 168,@{xd}@
                                "end": 172@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 145,@{xd}@
                            "end": 173@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 145,@{xd}@
                    "end": 173@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 129,@{xd}@
                "end": 175@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 180,@{xd}@
                    "end": 182@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 186,@{xd}@
                        "end": 186@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 201,@{xd}@
                                    "end": 204@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 201,@{xd}@
                                "end": 204@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 201,@{xd}@
                        "end": 204@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 208,@{xd}@
                        "end": 212@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 184,@{xd}@
                    "end": 212@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 175,@{xd}@
                "end": 213@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 213,@{xd}@
                        "end": 227@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 228,@{xd}@
                                    "end": 232@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 228,@{xd}@
                                "end": 245@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 228,@{xd}@
                        "end": 245@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 246,@{xd}@
                        "end": 246@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 227,@{xd}@
                    "end": 247@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 213,@{xd}@
                "end": 248@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 254,@{xd}@
                                "end": 256@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 257,@{xd}@
                                    "end": 259@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 260,@{xd}@
                                    "end": 260@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 257,@{xd}@
                                "end": 277@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 277,@{xd}@
                                "end": 279@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 254,@{xd}@
                            "end": 279@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 254,@{xd}@
                    "end": 279@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 248,@{xd}@
                "end": 280@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 280,@{xd}@
                        "end": 293@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 294,@{xd}@
                        "end": 309@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 310,@{xd}@
                        "end": 310@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 293,@{xd}@
                    "end": 311@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 280,@{xd}@
                "end": 312@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 321,@{xd}@
                    "end": 325@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 342,@{xd}@
                    "end": 343@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 345,@{xd}@
                        "end": 345@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 343,@{xd}@
                    "end": 346@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 326,@{xd}@
                    "end": 326@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 312,@{xd}@
                "end": 346@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 356,@{xd}@
                    "end": 360@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8424,@{xd}@
                                        "name": {@{xd}@
                                            "kind": 196711,@{xd}@
                                            "text": "A",@{xd}@
                                            "rawText": "A",@{xd}@
                                            "flags": 16384,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 0,@{xd}@
                                            "start": 365,@{xd}@
                                            "end": 369@{xd}@
                                        },@{xd}@
                                        "constraint": null,@{xd}@
                                        "defaultType": null,@{xd}@
                                        "expression": null,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 2097152,@{xd}@
                                        "start": 365,@{xd}@
                                        "end": 369@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 365,@{xd}@
                                "end": 369@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 383,@{xd}@
                                            "end": 386@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 383,@{xd}@
                                        "end": 386@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 383,@{xd}@
                                "end": 386@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 388,@{xd}@
                                "end": 392@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 362,@{xd}@
                            "end": 393@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 362,@{xd}@
                    "end": 393@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 346,@{xd}@
                "end": 395@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 400,@{xd}@
                    "end": 402@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 406,@{xd}@
                        "end": 406@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 422,@{xd}@
                                    "end": 425@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 422,@{xd}@
                                "end": 425@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 422,@{xd}@
                        "end": 425@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 429,@{xd}@
                        "end": 433@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 404,@{xd}@
                    "end": 433@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 395,@{xd}@
                "end": 434@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 434@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 434@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@
```

### Diagnostics

```javascript
 test case@{xd}@
@{xd}@
## Input@{xd}@
@{xd}@
`````js@{xd}@
functionName<A /* A comment */>();@{xd}@
const a: T</* comment */> = 1;@{xd}@
functionName</* comment */>();@{xd}@
function foo</* comment */>() {}@{xd}@
interface Foo {@{xd}@
 </* comment */>(arg): any;@{xd}@
}@{xd}@
type T = </* comment */>(arg) => any;@{xd}@
@{xd}@
functionName<@{xd}@
  A // comment@{xd}@
>();@{xd}@
const a: T<@{xd}@
  // comment@{xd}@
> = 1;@{xd}@
functionName<@{xd}@
  // comment@{xd}@
>();@{xd}@
function foo<@{xd}@
  // comment@{xd}@
>() {}@{xd}@
interface Foo {@{xd}@
 <@{xd}@
  A// comment@{xd}@
 >(arg): any;@{xd}@
}@{xd}@
type T = <@{xd}@
  // comment@{xd}@
>(arg) => any;@{xd}@
`````@{xd}@
@{xd}@
## Output@{xd}@
@{xd}@
@{xd}@
### Hybrid CST@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
{@{xd}@
    "kind": 196,@{xd}@
    "source": "functionName<A /* A comment */>();\nconst a: T</* comment */> = 1;\nfunctionName</* comment */>();\nfunction foo</* comment */>() {}\ninterface Foo {\n </* comment */>(arg): any;\n}\ntype T = </* comment */>(arg) => any;\n\nfunctionName<\n  A // comment\n>();\nconst a: T<\n  // comment\n> = 1;\nfunctionName<\n  // comment\n>();\nfunction foo<\n  // comment\n>() {}\ninterface Foo {\n <\n  A// comment\n >(arg): any;\n}\ntype T = <\n  // comment\n>(arg) => any;",@{xd}@
    "filename": "",@{xd}@
    "scriptBody": {@{xd}@
        "kind": 197,@{xd}@
        "statements": [@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 0,@{xd}@
                        "end": 12@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 13,@{xd}@
                                    "end": 14@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 13,@{xd}@
                                "end": 31@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 13,@{xd}@
                        "end": 31@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 32,@{xd}@
                        "end": 32@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 12,@{xd}@
                    "end": 33@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 0,@{xd}@
                "end": 34@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 40,@{xd}@
                                "end": 42@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 43,@{xd}@
                                    "end": 45@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 46,@{xd}@
                                    "end": 46@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 43,@{xd}@
                                "end": 62@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 62,@{xd}@
                                "end": 64@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 40,@{xd}@
                            "end": 64@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 40,@{xd}@
                    "end": 64@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 34,@{xd}@
                "end": 65@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 65,@{xd}@
                        "end": 78@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 79,@{xd}@
                        "end": 93@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 94,@{xd}@
                        "end": 94@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 78,@{xd}@
                    "end": 95@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 65,@{xd}@
                "end": 96@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 105,@{xd}@
                    "end": 109@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 125,@{xd}@
                    "end": 126@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 128,@{xd}@
                        "end": 128@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 126,@{xd}@
                    "end": 129@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 110,@{xd}@
                    "end": 110@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 96,@{xd}@
                "end": 129@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 139,@{xd}@
                    "end": 143@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [],@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 148,@{xd}@
                                "end": 148@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 163,@{xd}@
                                            "end": 166@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 163,@{xd}@
                                        "end": 166@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 163,@{xd}@
                                "end": 166@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 168,@{xd}@
                                "end": 172@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 145,@{xd}@
                            "end": 173@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 145,@{xd}@
                    "end": 173@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 129,@{xd}@
                "end": 175@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 180,@{xd}@
                    "end": 182@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 186,@{xd}@
                        "end": 186@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 201,@{xd}@
                                    "end": 204@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 201,@{xd}@
                                "end": 204@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 201,@{xd}@
                        "end": 204@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 208,@{xd}@
                        "end": 212@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 184,@{xd}@
                    "end": 212@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 175,@{xd}@
                "end": 213@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 213,@{xd}@
                        "end": 227@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [@{xd}@
                            {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "A",@{xd}@
                                    "rawText": "A",@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 228,@{xd}@
                                    "end": 232@{xd}@
                                },@{xd}@
                                "typeArguments": null,@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 228,@{xd}@
                                "end": 245@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 228,@{xd}@
                        "end": 245@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 246,@{xd}@
                        "end": 246@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 227,@{xd}@
                    "end": 247@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 213,@{xd}@
                "end": 248@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 142,@{xd}@
                "isConst": true,@{xd}@
                "binding": {@{xd}@
                    "kind": 31,@{xd}@
                    "bindingList": [@{xd}@
                        {@{xd}@
                            "kind": 141,@{xd}@
                            "binding": {@{xd}@
                                "kind": 131102,@{xd}@
                                "text": "a",@{xd}@
                                "rawText": "a",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1025,@{xd}@
                                "start": 254,@{xd}@
                                "end": 256@{xd}@
                            },@{xd}@
                            "exclamation": false,@{xd}@
                            "type": {@{xd}@
                                "kind": 8428,@{xd}@
                                "typeName": {@{xd}@
                                    "kind": 196711,@{xd}@
                                    "text": "T",@{xd}@
                                    "rawText": "T",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 0,@{xd}@
                                    "start": 257,@{xd}@
                                    "end": 259@{xd}@
                                },@{xd}@
                                "typeArguments": {@{xd}@
                                    "kind": 8419,@{xd}@
                                    "typeArgumentsList": [],@{xd}@
                                    "flags": 16384,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 2097152,@{xd}@
                                    "start": 260,@{xd}@
                                    "end": 260@{xd}@
                                },@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 257,@{xd}@
                                "end": 277@{xd}@
                            },@{xd}@
                            "initializer": {@{xd}@
                                "kind": 4261540,@{xd}@
                                "text": 1,@{xd}@
                                "rawText": "1",@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 0,@{xd}@
                                "start": 277,@{xd}@
                                "end": 279@{xd}@
                            },@{xd}@
                            "flags": 0,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 0,@{xd}@
                            "start": 254,@{xd}@
                            "end": 279@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "flags": 16,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 254,@{xd}@
                    "end": 279@{xd}@
                },@{xd}@
                "flags": 16400,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 769,@{xd}@
                "start": 248,@{xd}@
                "end": 280@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 2097233,@{xd}@
                "expression": {@{xd}@
                    "kind": 66091,@{xd}@
                    "expression": {@{xd}@
                        "kind": 196712,@{xd}@
                        "text": "functionName",@{xd}@
                        "rawText": "functionName",@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 280,@{xd}@
                        "end": 293@{xd}@
                    },@{xd}@
                    "typeArguments": {@{xd}@
                        "kind": 8419,@{xd}@
                        "typeArgumentsList": [],@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 294,@{xd}@
                        "end": 309@{xd}@
                    },@{xd}@
                    "argumentList": {@{xd}@
                        "kind": 3,@{xd}@
                        "elements": [],@{xd}@
                        "trailingComma": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "start": 310,@{xd}@
                        "end": 310@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 293,@{xd}@
                    "end": 311@{xd}@
                },@{xd}@
                "flags": 0,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 0,@{xd}@
                "start": 280,@{xd}@
                "end": 312@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 264284,@{xd}@
                "name": {@{xd}@
                    "kind": 131102,@{xd}@
                    "text": "foo",@{xd}@
                    "rawText": "foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 1025,@{xd}@
                    "start": 321,@{xd}@
                    "end": 325@{xd}@
                },@{xd}@
                "formalParameters": {@{xd}@
                    "kind": 90,@{xd}@
                    "formalParameterList": [],@{xd}@
                    "trailingComma": false,@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 342,@{xd}@
                    "end": 343@{xd}@
                },@{xd}@
                "type": null,@{xd}@
                "contents": {@{xd}@
                    "kind": 91,@{xd}@
                    "functionStatementList": {@{xd}@
                        "kind": 94,@{xd}@
                        "statements": [],@{xd}@
                        "multiline": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 0,@{xd}@
                        "start": 345,@{xd}@
                        "end": 345@{xd}@
                    },@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 343,@{xd}@
                    "end": 346@{xd}@
                },@{xd}@
                "typeParameters": {@{xd}@
                    "kind": 8425,@{xd}@
                    "typeParameterList": [],@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 326,@{xd}@
                    "end": 326@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 256,@{xd}@
                "start": 312,@{xd}@
                "end": 346@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8311,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "Foo",@{xd}@
                    "rawText": "Foo",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 356,@{xd}@
                    "end": 360@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "heritageClauses": null,@{xd}@
                "objectTypeMembers": {@{xd}@
                    "kind": 169,@{xd}@
                    "members": [@{xd}@
                        {@{xd}@
                            "kind": 8236,@{xd}@
                            "isReadOnly": false,@{xd}@
                            "accessModifier": null,@{xd}@
                            "typeParameters": {@{xd}@
                                "kind": 8425,@{xd}@
                                "typeParameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8424,@{xd}@
                                        "name": {@{xd}@
                                            "kind": 196711,@{xd}@
                                            "text": "A",@{xd}@
                                            "rawText": "A",@{xd}@
                                            "flags": 16384,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 0,@{xd}@
                                            "start": 365,@{xd}@
                                            "end": 369@{xd}@
                                        },@{xd}@
                                        "constraint": null,@{xd}@
                                        "defaultType": null,@{xd}@
                                        "expression": null,@{xd}@
                                        "flags": 16384,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 2097152,@{xd}@
                                        "start": 365,@{xd}@
                                        "end": 369@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "flags": 16384,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 365,@{xd}@
                                "end": 369@{xd}@
                            },@{xd}@
                            "parameters": {@{xd}@
                                "kind": 8367,@{xd}@
                                "parameterList": [@{xd}@
                                    {@{xd}@
                                        "kind": 8366,@{xd}@
                                        "ellipsis": false,@{xd}@
                                        "binding": {@{xd}@
                                            "kind": 131102,@{xd}@
                                            "text": "arg",@{xd}@
                                            "rawText": "arg",@{xd}@
                                            "flags": 0,@{xd}@
                                            "intersects": false,@{xd}@
                                            "transformFlags": 1025,@{xd}@
                                            "start": 383,@{xd}@
                                            "end": 386@{xd}@
                                        },@{xd}@
                                        "isOptional": false,@{xd}@
                                        "type": null,@{xd}@
                                        "initializer": null,@{xd}@
                                        "accessModifier": null,@{xd}@
                                        "isReadOnly": false,@{xd}@
                                        "flags": 0,@{xd}@
                                        "intersects": false,@{xd}@
                                        "transformFlags": 1,@{xd}@
                                        "start": 383,@{xd}@
                                        "end": 386@{xd}@
                                    }@{xd}@
                                ],@{xd}@
                                "trailingcomma": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 383,@{xd}@
                                "end": 386@{xd}@
                            },@{xd}@
                            "returnType": {@{xd}@
                                "kind": 4202498,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 2097152,@{xd}@
                                "start": 388,@{xd}@
                                "end": 392@{xd}@
                            },@{xd}@
                            "flags": 16384,@{xd}@
                            "intersects": false,@{xd}@
                            "transformFlags": 2097152,@{xd}@
                            "start": 362,@{xd}@
                            "end": 393@{xd}@
                        }@{xd}@
                    ],@{xd}@
                    "multiline": true,@{xd}@
                    "flags": 16384,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 362,@{xd}@
                    "end": 393@{xd}@
                },@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 346,@{xd}@
                "end": 395@{xd}@
            },@{xd}@
            {@{xd}@
                "kind": 8417,@{xd}@
                "name": {@{xd}@
                    "kind": 196712,@{xd}@
                    "text": "T",@{xd}@
                    "rawText": "T",@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 0,@{xd}@
                    "start": 400,@{xd}@
                    "end": 402@{xd}@
                },@{xd}@
                "type": {@{xd}@
                    "kind": 8287,@{xd}@
                    "typeParameters": {@{xd}@
                        "kind": 8425,@{xd}@
                        "typeParameterList": [],@{xd}@
                        "flags": 16384,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 406,@{xd}@
                        "end": 406@{xd}@
                    },@{xd}@
                    "parameters": {@{xd}@
                        "kind": 8367,@{xd}@
                        "parameterList": [@{xd}@
                            {@{xd}@
                                "kind": 8366,@{xd}@
                                "ellipsis": false,@{xd}@
                                "binding": {@{xd}@
                                    "kind": 131102,@{xd}@
                                    "text": "arg",@{xd}@
                                    "rawText": "arg",@{xd}@
                                    "flags": 0,@{xd}@
                                    "intersects": false,@{xd}@
                                    "transformFlags": 1025,@{xd}@
                                    "start": 422,@{xd}@
                                    "end": 425@{xd}@
                                },@{xd}@
                                "isOptional": false,@{xd}@
                                "type": null,@{xd}@
                                "initializer": null,@{xd}@
                                "accessModifier": null,@{xd}@
                                "isReadOnly": false,@{xd}@
                                "flags": 0,@{xd}@
                                "intersects": false,@{xd}@
                                "transformFlags": 1,@{xd}@
                                "start": 422,@{xd}@
                                "end": 425@{xd}@
                            }@{xd}@
                        ],@{xd}@
                        "trailingcomma": false,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 422,@{xd}@
                        "end": 425@{xd}@
                    },@{xd}@
                    "returnType": {@{xd}@
                        "kind": 4202498,@{xd}@
                        "flags": 0,@{xd}@
                        "intersects": false,@{xd}@
                        "transformFlags": 2097152,@{xd}@
                        "start": 429,@{xd}@
                        "end": 433@{xd}@
                    },@{xd}@
                    "flags": 0,@{xd}@
                    "intersects": false,@{xd}@
                    "transformFlags": 2097152,@{xd}@
                    "start": 404,@{xd}@
                    "end": 433@{xd}@
                },@{xd}@
                "typeParameters": null,@{xd}@
                "flags": 16384,@{xd}@
                "intersects": false,@{xd}@
                "transformFlags": 2097152,@{xd}@
                "start": 395,@{xd}@
                "end": 434@{xd}@
            }@{xd}@
        ],@{xd}@
        "transformFlags": 0,@{xd}@
        "flags": 0,@{xd}@
        "intersects": false,@{xd}@
        "start": 0,@{xd}@
        "end": 434@{xd}@
    },@{xd}@
    "jsx": false,@{xd}@
    "printable": true,@{xd}@
    "diagnostics": [],@{xd}@
    "incremental": false,@{xd}@
    "flags": 0,@{xd}@
    "intersects": false,@{xd}@
    "transformFlags": 0,@{xd}@
    "start": 0,@{xd}@
    "end": 434@{xd}@
}@{xd}@
```@{xd}@
@{xd}@
### Printed@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{x2716}@ Soon to be open sourced@{xd}@
```@{xd}@
@{xd}@
### Diagnostics@{xd}@
@{xd}@
@{xd}@
```javascript@{xd}@
@{xd}@
```@{xd}@
@{xd}@
```

