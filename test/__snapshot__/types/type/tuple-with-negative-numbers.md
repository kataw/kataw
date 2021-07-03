# Kataw parser test case

## Input

`````js
type x = [-1, 0, 1];

type x = [-1n, 0n, 1n];
`````

## Options

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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 4
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
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
                                "kind": 313,
                                "subtractionToken": {
                                    "kind": 134318643,
                                    "flags": 64,
                                    "start": 10,
                                    "end": 11
                                },
                                "text": 1,
                                "rawText": "1",
                                "flags": 2097216,
                                "start": 10,
                                "end": 12
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 12
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217968,
                                "text": 0,
                                "rawText": "0",
                                "flags": 2097216,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 15
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 134217968,
                                "text": 1,
                                "rawText": "1",
                                "flags": 2097216,
                                "start": 16,
                                "end": 18
                            },
                            "flags": 2097152,
                            "start": 16,
                            "end": 18
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 19
                },
                "flags": 2097152,
                "start": 8,
                "end": 19
            },
            "flags": 64,
            "start": 0,
            "end": 20
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 20,
                "end": 26
            },
            "name": {
                "kind": 134299649,
                "text": "x",
                "rawText": "x",
                "flags": 96,
                "start": 26,
                "end": 28
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 28,
                "end": 30
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
                                "kind": 313,
                                "subtractionToken": {
                                    "kind": 134318643,
                                    "flags": 64,
                                    "start": 32,
                                    "end": 33
                                },
                                "text": "1",
                                "rawText": "1n",
                                "flags": 2097216,
                                "start": 32,
                                "end": 35
                            },
                            "flags": 2097152,
                            "start": 32,
                            "end": 35
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 286,
                                "text": 0,
                                "rawText": "0n",
                                "flags": 2097216,
                                "start": 36,
                                "end": 39
                            },
                            "flags": 2097152,
                            "start": 36,
                            "end": 39
                        },
                        {
                            "kind": 139,
                            "bitwiseOrToken": null,
                            "bitwiseAndToken": null,
                            "type": {
                                "kind": 286,
                                "text": "1",
                                "rawText": "1n",
                                "flags": 2097216,
                                "start": 40,
                                "end": 43
                            },
                            "flags": 2097152,
                            "start": 40,
                            "end": 43
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 30,
                    "end": 44
                },
                "flags": 2097152,
                "start": 30,
                "end": 44
            },
            "flags": 65,
            "start": 20,
            "end": 45
        }
    ],
    "isModule": false,
    "source": "type x = [-1, 0, 1];\n\ntype x = [-1n, 0n, 1n];",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 45
}
```

### Printed

```javascript

type x = [[-1, 0, 1]]
type x = [[-1n, 0n, 1n]]

```

### Diagnostics

```javascript
✔ No errors
```

