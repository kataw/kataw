# Kataw parser test case

## Input

`````js
declare class A { }
declare class B extends A { }

declare class C {
    public foo;
}
namespace D { var x; }
declare class D extends C { }
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "declare class A { }\ndeclare class B extends A { }\n\ndeclare class C {\n    public foo;\n}\nnamespace D { var x; }\ndeclare class D extends C { }",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "A",
                "rawText": "A",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 13,
                "end": 15
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 17,
                "end": 19
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 1,
            "start": 7,
            "end": 19
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "B",
                "rawText": "B",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 33,
                "end": 35
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "A",
                    "rawText": "A",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 43,
                    "end": 45
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 43,
                "end": 45
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 47,
                "end": 49
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 1,
            "start": 27,
            "end": 49
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "C",
                "rawText": "C",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 64,
                "end": 66
            },
            "typeParameters": null,
            "classHeritage": null,
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [
                    {
                        "kind": 16468,
                        "key": {
                            "kind": 196711,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 79,
                            "end": 83
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": {
                            "kind": 4194494,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 68,
                            "end": 79
                        },
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 68,
                        "end": 84
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 68,
                "end": 86
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402685952,
            "symbol": null,
            "transformFlags": 1,
            "start": 58,
            "end": 86
        },
        {
            "kind": 2105597,
            "name": {
                "kind": 196712,
                "text": "D",
                "rawText": "D",
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 96,
                "end": 98
            },
            "body": {
                "kind": 2105596,
                "statements": [
                    {
                        "kind": 2097397,
                        "declarationList": {
                            "kind": 244,
                            "declarations": [
                                {
                                    "kind": 16627,
                                    "binding": {
                                        "kind": 131102,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "symbol": null,
                                        "transformFlags": 1025,
                                        "start": 104,
                                        "end": 106
                                    },
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": null,
                                    "flags": 104,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 0,
                                    "end": 106
                                }
                            ],
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 104,
                            "end": 106
                        },
                        "flags": 0,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 100,
                        "end": 107
                    }
                ],
                "multiline": false,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 100,
                "end": 107
            },
            "flags": 32768,
            "symbol": null,
            "transformFlags": 2097152,
            "start": 86,
            "end": 109
        },
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "D",
                "rawText": "D",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 123,
                "end": 125
            },
            "typeParameters": null,
            "classHeritage": {
                "kind": 52,
                "expression": {
                    "kind": 196712,
                    "text": "C",
                    "rawText": "C",
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 133,
                    "end": 135
                },
                "typeArguments": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 133,
                "end": 135
            },
            "implementClauses": null,
            "members": {
                "kind": 50,
                "elements": [],
                "flags": 0,
                "symbol": null,
                "transformFlags": 1,
                "start": 137,
                "end": 139
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 402653184,
            "symbol": null,
            "transformFlags": 1,
            "start": 117,
            "end": 139
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 139
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

