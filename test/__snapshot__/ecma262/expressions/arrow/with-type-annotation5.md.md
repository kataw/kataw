# Kataw parser test case

## Input

`````js
(x?b:c, a?:b)=>0;
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
                                "kind": 134299649,
                                "text": "a",
                                "rawText": "a",
                                "flags": 96,
                                "start": 7,
                                "end": 9
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 9,
                                "end": 10
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
                                        "start": 11,
                                        "end": 12
                                    },
                                    "typeParameters": null,
                                    "flags": 2097152,
                                    "start": 11,
                                    "end": 12
                                },
                                "flags": 2097152,
                                "start": 11,
                                "end": 12
                            },
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 12
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 1,
                    "end": 13
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 13,
                    "end": 15
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 15,
                    "end": 16
                },
                "flags": 32,
                "start": 0,
                "end": 16
            },
            "flags": 16,
            "start": 0,
            "end": 17
        }
    ],
    "isModule": false,
    "source": "(x?b:c, a?:b)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 17
}
```

### Printed

```javascript

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  (x ? b : c, a?: b) => 0;

```

### Diagnostics

```javascript
✔ No errors
```

