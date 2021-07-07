# Kataw parser test case

## Input

`````js
let x: [?/*1*/x/*2*/];

let y: [.../*1*/x/*2*/];
`````

## Options

### Parser Options

`````js
{ allowTypes : true }
`````

## Output

### CST

```javascript
{
    "kind": 122,
    "directives": [],
    "statements": [
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 80,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "x",
                            "rawText": "x",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 3,
                            "end": 5
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 139,
                                        "bitwiseOrToken": null,
                                        "bitwiseAndToken": null,
                                        "type": {
                                            "kind": 134217970,
                                            "nullableToken": {
                                                "kind": 134217750,
                                                "flags": 64,
                                                "transformFlags": 0,
                                                "start": 8,
                                                "end": 9
                                            },
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 9,
                                                    "end": 15
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 9,
                                                "end": 15
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 8,
                                            "end": 15
                                        },
                                        "flags": 2097152,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 15
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 6,
                                "end": 21
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 6,
                            "end": 21
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 3,
                        "end": 21
                    }
                ],
                "flags": 16,
                "transformFlags": 0,
                "start": 3,
                "end": 21
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 0,
            "end": 22
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "transformFlags": 0,
                "start": 22,
                "end": 27
            },
            "binding": {
                "kind": 151,
                "bindingList": [
                    {
                        "kind": 190,
                        "binding": {
                            "kind": 134299649,
                            "text": "y",
                            "rawText": "y",
                            "flags": 96,
                            "transformFlags": 0,
                            "start": 27,
                            "end": 29
                        },
                        "type": {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 147,
                                "elementTypes": [
                                    {
                                        "kind": 333,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "transformFlags": 0,
                                            "start": 32,
                                            "end": 35
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "x",
                                                    "rawText": "x",
                                                    "flags": 96,
                                                    "transformFlags": 0,
                                                    "start": 35,
                                                    "end": 41
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "transformFlags": 0,
                                                "start": 35,
                                                "end": 41
                                            },
                                            "flags": 2097152,
                                            "transformFlags": 0,
                                            "start": 35,
                                            "end": 41
                                        },
                                        "flags": 2097216,
                                        "transformFlags": 0,
                                        "start": 32,
                                        "end": 41
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "transformFlags": 0,
                                "start": 30,
                                "end": 47
                            },
                            "flags": 2097152,
                            "transformFlags": 0,
                            "start": 30,
                            "end": 47
                        },
                        "initializer": null,
                        "flags": 16,
                        "transformFlags": 4224,
                        "start": 27,
                        "end": 47
                    }
                ],
                "flags": 17,
                "transformFlags": 0,
                "start": 27,
                "end": 47
            },
            "flags": 33554448,
            "transformFlags": 0,
            "start": 22,
            "end": 48
        }
    ],
    "isModule": false,
    "source": "let x: [?/*1*/x/*2*/];\n\nlet y: [.../*1*/x/*2*/];",
    "fileName": "__root__",
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 48
}
```

### Printed

```javascript
let x: [? x];
let y: [...x];

```

### Diagnostics

```javascript
✔ No errors
```

