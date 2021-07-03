# Kataw parser test case

## Input

`````js
(a?:b, x?b:c)=>0;
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
            "kind": 120,
            "expression": {
                "kind": 121,
                "expression": {
                    "kind": 132,
                    "expressions": [
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 2,
                                "end": 3
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 144,
                                    "typeName": {
                                        "kind": 134299649,
                                        "text": "b",
                                        "rawText": "b",
                                        "flags": 96,
                                        "start": 4,
                                        "end": 5
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 4,
                                    "end": 5
                                },
                                "flags": 2097152,
                                "start": 4,
                                "end": 5
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 5
                        },
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 6,
                                "end": 8
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 8,
                                "end": 9
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 9,
                                "end": 10
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 10,
                                "end": 11
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 12
                        }
                    ],
                    "flags": 32,
                    "start": 0,
                    "end": 13
                },
                "flags": 32,
                "start": 0,
                "end": 13
            },
            "flags": 16,
            "start": 0,
            "end": 13
        },
        {
            "kind": 120,
            "expression": {
                "kind": 201392130,
                "text": 0,
                "rawText": "0",
                "flags": 96,
                "start": 15,
                "end": 16
            },
            "flags": 16,
            "start": 15,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(a?:b, x?b:c)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 13, end: 15

```

