# Kataw parser test case

## Input

`````js
class MyComponent {
ngModel!: ng.INgModelController;
}

const x!: string

var y!: MyComponent
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "class MyComponent {\nngModel!: ng.INgModelController;\n}\n\nconst x!: string\n\nvar y!: MyComponent",
    "filename": "",
    "statements": [
        {
            "kind": 48,
            "name": {
                "kind": 131102,
                "text": "MyComponent",
                "rawText": "MyComponent",
                "flags": 0,
                "symbol": null,
                "transformFlags": 1025,
                "start": 5,
                "end": 17
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
                            "text": "ngModel",
                            "rawText": "ngModel",
                            "flags": 32768,
                            "symbol": null,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 27
                        },
                        "isInKeyword": false,
                        "expression": null,
                        "isAbstract": false,
                        "isReadOnly": false,
                        "isOptional": false,
                        "exclamation": true,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 8383,
                                "left": {
                                    "kind": 196711,
                                    "text": "ng",
                                    "rawText": "ng",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 29,
                                    "end": 32
                                },
                                "right": {
                                    "kind": 196711,
                                    "text": "INgModelController",
                                    "rawText": "INgModelController",
                                    "flags": 0,
                                    "symbol": null,
                                    "transformFlags": 0,
                                    "start": 33,
                                    "end": 51
                                },
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 51
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 29,
                            "end": 52
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isStatic": false,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 524352,
                        "start": 19,
                        "end": 52
                    }
                ],
                "flags": 32768,
                "symbol": null,
                "transformFlags": 1,
                "start": 19,
                "end": 54
            },
            "decorators": null,
            "isAbstract": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 1,
            "start": 0,
            "end": 54
        },
        {
            "kind": 142,
            "binding": {
                "kind": 31,
                "bindingList": [
                    {
                        "kind": 16525,
                        "binding": {
                            "kind": 131102,
                            "text": "x",
                            "rawText": "x",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 61,
                            "end": 63
                        },
                        "exclamation": true,
                        "type": {
                            "kind": 4202702,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 65,
                            "end": 72
                        },
                        "initializer": null,
                        "flags": 32768,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 61,
                        "end": 72
                    }
                ],
                "flags": 40,
                "symbol": null,
                "transformFlags": 0,
                "start": 54,
                "end": 72
            },
            "flags": 32809,
            "symbol": null,
            "transformFlags": 769,
            "start": 54,
            "end": 72
        },
        {
            "kind": 2097397,
            "declarationList": {
                "kind": 244,
                "declarations": [
                    {
                        "kind": 16627,
                        "binding": {
                            "kind": 131102,
                            "text": "y",
                            "rawText": "y",
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1025,
                            "start": 77,
                            "end": 79
                        },
                        "exclamation": true,
                        "type": {
                            "kind": 134226156,
                            "typeName": {
                                "kind": 196711,
                                "text": "MyComponent",
                                "rawText": "MyComponent",
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 0,
                                "start": 81,
                                "end": 93
                            },
                            "typeArguments": null,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 2097152,
                            "start": 81,
                            "end": 93
                        },
                        "initializer": null,
                        "flags": 77,
                        "symbol": null,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 93
                    }
                ],
                "flags": 0,
                "symbol": null,
                "transformFlags": 0,
                "start": 77,
                "end": 93
            },
            "flags": 41,
            "symbol": null,
            "transformFlags": 0,
            "start": 72,
            "end": 93
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 2,
            "message": "';' expected.",
            "start": 74,
            "length": 0
        }
    ],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 93
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

