# Kataw parser test case

## Input

`````js
let x = (): Array<(string) => number> => []
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
                        "optionalToken": null,
                        "type": null,
                        "initializer": {
                            "kind": 271,
                            "arrowToken": {
                                "kind": 10,
                                "flags": 0,
                                "start": 26,
                                "end": 29
                            },
                            "typeParameters": null,
                            "parameters": [],
                            "asyncKeyword": null,
                            "returnType": {
                                "kind": 139,
                                "type": {
                                    "kind": 144,
                                    "id": {
                                        "kind": 134299649,
                                        "text": "Array",
                                        "rawText": "Array",
                                        "flags": 96,
                                        "start": 11,
                                        "end": 17
                                    },
                                    "typeParameters": {
                                        "kind": 266,
                                        "parameters": [
                                            {
                                                "kind": 267,
                                                "type": {
                                                    "kind": 260,
                                                    "type": {
                                                        "kind": 134234347,
                                                        "flags": 64,
                                                        "start": 19,
                                                        "end": 25
                                                    },
                                                    "flags": 0,
                                                    "start": 18,
                                                    "end": 26
                                                },
                                                "flags": 0,
                                                "start": 18,
                                                "end": 26
                                            }
                                        ],
                                        "flags": 0,
                                        "start": 17,
                                        "end": 26
                                    },
                                    "flags": 0,
                                    "start": 11,
                                    "end": 26
                                },
                                "flags": 0,
                                "start": 10,
                                "end": 26
                            },
                            "contents": {
                                "kind": 198,
                                "left": {
                                    "kind": 134299649,
                                    "text": "number",
                                    "rawText": "number",
                                    "flags": 96,
                                    "start": 29,
                                    "end": 36
                                },
                                "operatorToken": {
                                    "kind": 34883,
                                    "flags": 64,
                                    "start": 36,
                                    "end": 37
                                },
                                "right": {
                                    "kind": 16637,
                                    "text": "",
                                    "flags": 64,
                                    "start": 37,
                                    "end": 37
                                },
                                "flags": 32,
                                "start": 29,
                                "end": 37
                            },
                            "flags": 32,
                            "start": 7,
                            "end": 37
                        },
                        "flags": 16,
                        "start": 3,
                        "end": 37
                    }
                ],
                "flags": 16,
                "start": 3,
                "end": 37
            },
            "flags": 33554448,
            "start": 0,
            "end": 37
        },
        {
            "kind": 120,
            "expression": {
                "kind": 119,
                "elementList": {
                    "kind": 270,
                    "elements": [],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 42,
                    "end": 42
                },
                "flags": 32,
                "start": 40,
                "end": 43
            },
            "flags": 16,
            "start": 40,
            "end": 43
        }
    ],
    "isModule": false,
    "source": "let x = (): Array<(string) => number> => []",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 43
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected to find a '>' to match the '<' token here. - start: 26, end: 29
✖ Identifier expected - start: 37, end: 40
✖ ',' expected - start: 37, end: 40

```

