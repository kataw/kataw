# Kataw parser test case

## Input

`````js
type a = (1,2&3, ['string']) => T;

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
                                "value": 1,
                                "flags": 0,
                                "start": 10,
                                "end": 11
                            },
                            "optionalToken": null,
                            "types": null,
                            "flags": 0,
                            "start": 8,
                            "end": 11
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
                                        "value": 2,
                                        "flags": 0,
                                        "start": 12,
                                        "end": 13
                                    },
                                    {
                                        "kind": 134217968,
                                        "value": 3,
                                        "flags": 0,
                                        "start": 14,
                                        "end": 15
                                    }
                                ],
                                "flags": 0,
                                "start": 13,
                                "end": 15
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 15
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 16
                },
                "returnType": {
                    "kind": 147,
                    "elementTypes": [
                        {
                            "kind": 134217967,
                            "value": "string",
                            "flags": 0,
                            "start": 18,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 4194304,
                    "start": 16,
                    "end": 27
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 27
            },
            "flags": 16,
            "start": 0,
            "end": 27
        },
        {
            "kind": 120,
            "expression": {
                "kind": 134299649,
                "text": "T",
                "rawText": "T",
                "flags": 96,
                "start": 31,
                "end": 33
            },
            "flags": 16,
            "start": 31,
            "end": 34
        }
    ],
    "isModule": false,
    "source": "type a = (1,2&3, ['string']) => T;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 35
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ Expected '=>' - start: 16, end: 18
✖ Expected a `;` - start: 27, end: 28
✖ Declaration or statement expected - start: 28, end: 31

```

