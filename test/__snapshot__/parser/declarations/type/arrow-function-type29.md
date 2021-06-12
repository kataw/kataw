# Kataw parser test case

## Input

`````js
type a = ((q | y, x?:string | (x?:string)=> T)=> T) => T;
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
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 64,
                "start": 0,
                "end": 6
            },
            "name": {
                "kind": 134299649,
                "text": "a",
                "rawText": "a",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 137,
                    "types": [
                        {
                            "kind": 134299649,
                            "text": "q",
                            "rawText": "q",
                            "flags": 96,
                            "start": 11,
                            "end": 12
                        },
                        {
                            "kind": 144,
                            "id": {
                                "kind": 134299649,
                                "text": "y",
                                "rawText": "y",
                                "flags": 96,
                                "start": 14,
                                "end": 16
                            },
                            "typeParameters": null,
                            "flags": 0,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "flags": 0,
                    "start": 12,
                    "end": 16
                },
                "flags": 0,
                "start": 8,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 16
        },
        {
            "kind": 120,
            "expression": {
                "kind": 197,
                "shortCircuit": {
                    "kind": 134299649,
                    "text": "x",
                    "rawText": "x",
                    "flags": 96,
                    "start": 17,
                    "end": 19
                },
                "questionToken": {
                    "kind": 134217750,
                    "flags": 64,
                    "start": 19,
                    "end": 20
                },
                "consequent": {
                    "kind": 16637,
                    "text": "",
                    "flags": 64,
                    "start": 20,
                    "end": 20
                },
                "colonToken": {
                    "kind": 21,
                    "flags": 64,
                    "start": 20,
                    "end": 21
                },
                "alternate": {
                    "kind": 198,
                    "left": {
                        "kind": 134299649,
                        "text": "string",
                        "rawText": "string",
                        "flags": 96,
                        "start": 21,
                        "end": 27
                    },
                    "operatorToken": {
                        "kind": 134251592,
                        "flags": 64,
                        "start": 27,
                        "end": 29
                    },
                    "right": {
                        "kind": 271,
                        "arrowToken": {
                            "kind": 10,
                            "flags": 64,
                            "start": 41,
                            "end": 43
                        },
                        "typeParameters": null,
                        "parameters": [
                            {
                                "kind": 281,
                                "ellipsisToken": null,
                                "left": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 31,
                                    "end": 32
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 32,
                                    "end": 33
                                },
                                "type": {
                                    "kind": 139,
                                    "type": {
                                        "kind": 134234347,
                                        "flags": 64,
                                        "start": 34,
                                        "end": 40
                                    },
                                    "flags": 0,
                                    "start": 33,
                                    "end": 40
                                },
                                "right": null,
                                "flags": 32,
                                "start": 29,
                                "end": 40
                            }
                        ],
                        "asyncKeyword": null,
                        "returnType": null,
                        "contents": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 43,
                            "end": 45
                        },
                        "flags": 32,
                        "start": 29,
                        "end": 45
                    },
                    "flags": 32,
                    "start": 21,
                    "end": 45
                },
                "flags": 32,
                "start": 17,
                "end": 45
            },
            "flags": 16,
            "start": 17,
            "end": 45
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 48,
                "end": 50
            },
            "flags": 16,
            "start": 48,
            "end": 50
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 54,
                "end": 56
            },
            "flags": 16,
            "start": 54,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "type a = ((q | y, x?:string | (x?:string)=> T)=> T) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected a `;` - start: 16, end: 17
✖ Identifier expected - start: 20, end: 21
✖ Expected a `;` - start: 41, end: 43
✖ Expected a `;` - start: 45, end: 46
✖ Declaration or statement expected - start: 46, end: 48
✖ Expected a `;` - start: 50, end: 51
✖ Declaration or statement expected - start: 51, end: 54

```

