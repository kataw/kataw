# Kataw parser test case

## Input

`````js
let x: [.../*1*/a/*2*/];

let y: [...[/*1*/(/*2*/a/*3*/&/*4*/b/*5*/)/*6*/]/*7*/]

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
                                        "kind": 333,
                                        "ellipsisToken": {
                                            "kind": 524302,
                                            "flags": 64,
                                            "start": 8,
                                            "end": 11
                                        },
                                        "type": {
                                            "kind": 139,
                                            "bitwiseOrToken": null,
                                            "bitwiseAndToken": null,
                                            "type": {
                                                "kind": 144,
                                                "typeName": {
                                                    "kind": 134299649,
                                                    "text": "a",
                                                    "rawText": "a",
                                                    "flags": 96,
                                                    "start": 11,
                                                    "end": 17
                                                },
                                                "typeParameters": null,
                                                "flags": 2097152,
                                                "start": 11,
                                                "end": 17
                                            },
                                            "flags": 2097152,
                                            "start": 11,
                                            "end": 17
                                        },
                                        "flags": 2097216,
                                        "start": 8,
                                        "end": 17
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 6,
                                "end": 23
                            },
                            "flags": 2097152,
                            "start": 6,
                            "end": 23
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 3,
                        "end": 23
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 23
            },
            "flags": 33554448,
            "start": 0,
            "end": 24
        },
        {
            "kind": 162,
            "lexicalKeyword": {
                "kind": 41951307,
                "flags": 81,
                "start": 24,
                "end": 29
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
                            "start": 29,
                            "end": 31
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
                                            "start": 34,
                                            "end": 37
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
                                                            "kind": 290,
                                                            "type": {
                                                                "kind": 138,
                                                                "types": [
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "a",
                                                                            "rawText": "a",
                                                                            "flags": 96,
                                                                            "start": 44,
                                                                            "end": 50
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 38,
                                                                        "end": 50
                                                                    },
                                                                    {
                                                                        "kind": 144,
                                                                        "typeName": {
                                                                            "kind": 134299649,
                                                                            "text": "b",
                                                                            "rawText": "b",
                                                                            "flags": 96,
                                                                            "start": 56,
                                                                            "end": 62
                                                                        },
                                                                        "typeParameters": null,
                                                                        "flags": 2097152,
                                                                        "start": 56,
                                                                        "end": 62
                                                                    }
                                                                ],
                                                                "flags": 2097152,
                                                                "start": 50,
                                                                "end": 62
                                                            },
                                                            "flags": 2097152,
                                                            "start": 38,
                                                            "end": 68
                                                        },
                                                        "flags": 2097152,
                                                        "start": 38,
                                                        "end": 68
                                                    }
                                                ],
                                                "trailingComma": false,
                                                "flags": 2097152,
                                                "start": 37,
                                                "end": 74
                                            },
                                            "flags": 2097152,
                                            "start": 37,
                                            "end": 74
                                        },
                                        "flags": 2097216,
                                        "start": 34,
                                        "end": 74
                                    }
                                ],
                                "trailingComma": false,
                                "flags": 2097152,
                                "start": 32,
                                "end": 80
                            },
                            "flags": 2097152,
                            "start": 32,
                            "end": 80
                        },
                        "initializer": null,
                        "flags": 16,
                        "start": 29,
                        "end": 80
                    }
                ],
                "flags": 17,
                "start": 29,
                "end": 80
            },
            "flags": 33554448,
            "start": 24,
            "end": 80
        }
    ],
    "isModule": false,
    "source": "let x: [.../*1*/a/*2*/];\n\nlet y: [...[/*1*/(/*2*/a/*3*/&/*4*/b/*5*/)/*6*/]/*7*/]\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 81
}
```

### Printed

```javascript

let x: [.../*1*/a/*2*/];
let y: [...[/*1*/(/*2*//*1*/a/*3*/ & /*4*/b/*5*/)/*6*/]/*7*/];

```

### Diagnostics

```javascript
✔ No errors
```

