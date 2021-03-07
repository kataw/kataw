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
    "kind": 196,
    "source": "class MyComponent {\nngModel!: ng.INgModelController;\n}\n\nconst x!: string\n\nvar y!: MyComponent",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "MyComponent",
                    "rawText": "MyComponent",
                    "flags": 0,
                    "intersects": false,
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
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "ngModel",
                                "rawText": "ngModel",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 27
                            },
                            "isReadOnly": false,
                            "isOptional": false,
                            "exclamation": true,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 8383,
                                    "left": {
                                        "kind": 196711,
                                        "text": "ng",
                                        "rawText": "ng",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 32
                                    },
                                    "right": {
                                        "kind": 196711,
                                        "text": "INgModelController",
                                        "rawText": "INgModelController",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 33,
                                        "end": 51
                                    },
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 29,
                                    "end": 51
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 29,
                                "end": 52
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 19,
                            "end": 52
                        }
                    ],
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 19,
                    "end": 54
                },
                "decorators": null,
                "flags": 16384,
                "intersects": false,
                "transformFlags": 1,
                "start": 0,
                "end": 54
            },
            {
                "kind": 142,
                "isConst": true,
                "binding": {
                    "kind": 31,
                    "bindingList": [
                        {
                            "kind": 141,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 61,
                                "end": 63
                            },
                            "exclamation": true,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 65,
                                "end": 72
                            },
                            "initializer": null,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 61,
                            "end": 72
                        }
                    ],
                    "flags": 16400,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 61,
                    "end": 72
                },
                "flags": 16400,
                "intersects": false,
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
                            "kind": 243,
                            "binding": {
                                "kind": 131102,
                                "text": "y",
                                "rawText": "y",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 77,
                                "end": 79
                            },
                            "exclamation": true,
                            "type": {
                                "kind": 8428,
                                "typeName": {
                                    "kind": 196711,
                                    "text": "MyComponent",
                                    "rawText": "MyComponent",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 81,
                                    "end": 93
                                },
                                "typeArguments": null,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 81,
                                "end": 93
                            },
                            "initializer": null,
                            "flags": 77,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 93
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 77,
                    "end": 93
                },
                "flags": 16384,
                "intersects": false,
                "transformFlags": 0,
                "start": 72,
                "end": 93
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 93
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

