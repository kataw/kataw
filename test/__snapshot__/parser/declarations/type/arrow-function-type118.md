# Kataw parser test case

## Input

`````js
type a = (&1,|2&3, ['string']) => T;
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
                "arrowToken": null,
                "parameters": {
                    "kind": 279,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": {
                                "kind": 134217968,
                                "text": 1,
                                "flags": 96,
                                "start": 11,
                                "end": 12
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 32,
                            "start": 8,
                            "end": 12
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 138,
                                "types": [
                                    {
                                        "kind": 134217968,
                                        "text": 2,
                                        "flags": 96,
                                        "start": 14,
                                        "end": 15
                                    },
                                    {
                                        "kind": 134217968,
                                        "text": 3,
                                        "flags": 96,
                                        "start": 16,
                                        "end": 17
                                    }
                                ],
                                "flags": 32,
                                "start": 15,
                                "end": 17
                            },
                            "flags": 32,
                            "start": 13,
                            "end": 17
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 18
                },
                "returnType": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 134217967,
                            "value": "string",
                            "flags": 96,
                            "start": 20,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 4194336,
                    "start": 18,
                    "end": 29
                },
                "typeParameters": null,
                "flags": 32,
                "start": 8,
                "end": 29
            },
            "flags": 16,
            "start": 0,
            "end": 29
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 33,
                "end": 35
            },
            "flags": 16,
            "start": 33,
            "end": 36
        }
    ],
    "isModule": false,
    "source": "type a = (&1,|2&3, ['string']) => T;",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 36
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 18, end: 20
✖ Expected a `;` - start: 29, end: 30
✖ Declaration or statement expected - start: 30, end: 33

```

