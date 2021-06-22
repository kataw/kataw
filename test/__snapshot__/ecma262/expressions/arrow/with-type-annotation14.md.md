# Kataw parser test case

## Input

`````js
(a?, b?)=>0;
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
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 3
                        },
                        {
                            "kind": 281,
                            "ellipsisToken": null,
                            "left": {
                                "kind": 134299649,
                                "text": "b",
                                "rawText": "b",
                                "flags": 96,
                                "start": 4,
                                "end": 6
                            },
                            "optionalToken": {
                                "kind": 134217750,
                                "flags": 64,
                                "start": 6,
                                "end": 7
                            },
                            "type": null,
                            "right": null,
                            "flags": 32,
                            "start": 0,
                            "end": 7
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "start": 1,
                    "end": 8
                },
                "returnType": null,
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 8,
                    "end": 10
                },
                "contents": {
                    "kind": 201392130,
                    "text": 0,
                    "rawText": "0",
                    "flags": 96,
                    "start": 10,
                    "end": 11
                },
                "flags": 32,
                "start": 0,
                "end": 11
            },
            "flags": 16,
            "start": 0,
            "end": 12
        }
    ],
    "isModule": false,
    "source": "(a?, b?)=>0;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 12
}
```

### Printed

```javascript

() =>  0;
```

### Diagnostics

```javascript
✔ No errors
```

