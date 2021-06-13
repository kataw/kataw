# Kataw parser test case

## Input

`````js
type a = (&1,|2&3, ) => T;
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
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 6,
                "end": 8
            },
            "type": {
                "kind": 261,
                "arrowTypeParameterList": {
                    "kind": 10,
                    "flags": 64,
                    "start": 20,
                    "end": 23
                },
                "arrowToken": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134217968,
                                "text": 1,
                                "flags": 2097216,
                                "start": 11,
                                "end": 12
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 2097152,
                            "start": 8,
                            "end": 12
                        },
                        {
                            "kind": 284,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "text": 2,
                                        "flags": 2097216,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134217968,
                                        "text": 3,
                                        "flags": 2097216,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "flags": 2097152,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 2097152,
                            "start": 13,
                            "end": 17
                        }
                    ],
                    "trailingComma": true,
                    "flags": 2097152,
                    "start": 8,
                    "end": 18
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 23,
                        "end": 25
                    },
                    "typeParameters": null,
                    "flags": 2097152,
                    "start": 23,
                    "end": 25
                },
                "typeParameters": null,
                "flags": 2097152,
                "start": 8,
                "end": 25
            },
            "flags": 2097152,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "source": "type a = (&1,|2&3, ) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 26
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

