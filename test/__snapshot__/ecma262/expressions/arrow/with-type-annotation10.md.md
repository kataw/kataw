# Kataw parser test case

## Input

`````js
(x?b:c, [a]?:b)=>0;
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
                "kind": 271,
                "asyncKeyword": null,
                "typeParameters": null,
                "arrowPatameterList": {
                    "kind": 342,
                    "parameters": [
                        {
                            "kind": 197,
                            "shortCircuit": {
                                "kind": 134299649,
                                "text": "x",
                                "rawText": "x",
                                "flags": 96,
                                "start": 1,
                                "end": 2
                            },
                            "questionToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 2,
                                "end": 3
                            },
                            "consequent": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 3,
                                "end": 4
                            },
                            "colonToken": {
                                "kind": 21,
                                "flags": 64,
                                "start": 4,
                                "end": 5
                            },
                            "alternate": {
                                "kind": 134299649,
                                "text": "c",
                                "rawText": "c",
                                "flags": 96,
                                "start": 5,
                                "end": 6
                            },
                            "flags": 32,
                            "start": 0,
                            "end": 6
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 119,
                                "elementList": {
                                    "kind": 270,
                                    "elements": [
                                        {
                                            "kind": 134299649,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 96,
                                            "start": 9,
                                            "end": 10
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 32,
                                    "start": 9,
                                    "end": 10
                                },
                                "flags": 32,
                                "start": 7,
                                "end": 11
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 11,
                                "end": 12
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
                                        "start": 13,
                                        "end": 14
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 13,
                                    "end": 14
                                },
                                "flags": 2097152,
                                "start": 13,
                                "end": 14
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 14
                        }
                    ],
                    "trailingComma": false,
                    "flags": 34,
                    "start": 1,
                    "end": 15
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 15,
                    "end": 17
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 17,
                    "end": 18
                },
                "flags": 34,
                "start": 0,
                "end": 18
            },
            "flags": 16,
            "start": 0,
            "end": 19
        }
    ],
    "isModule": false,
    "source": "(x?b:c, [a]?:b)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 19
}
```

### Printed

```javascript

(x ? b : c, [a]? : b) => 0;
```

### Diagnostics

```javascript
✔ No errors
```

