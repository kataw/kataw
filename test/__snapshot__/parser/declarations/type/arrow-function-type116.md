# Kataw parser test case

## Input

`````js
type a = (1,2, x) => T;

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
                "arrowToken": {
                    "kind": 10,
                    "flags": 64,
                    "start": 17,
                    "end": 20
                },
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
                                "kind": 134217968,
                                "value": 2,
                                "flags": 0,
                                "start": 12,
                                "end": 13
                            },
                            "flags": 0,
                            "start": 12,
                            "end": 13
                        },
                        {
                            "kind": 149,
                            "ellipsisToken": null,
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 16
                                },
                                "typeParameters": null,
                                "flags": 0,
                                "start": 14,
                                "end": 16
                            },
                            "flags": 0,
                            "start": 14,
                            "end": 16
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 8,
                    "end": 16
                },
                "returnType": {
                    "kind": 144,
                    "id": {
                        "kind": 134299649,
                        "text": "T",
                        "rawText": "T",
                        "flags": 96,
                        "start": 20,
                        "end": 22
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 20,
                    "end": 22
                },
                "typeParameters": null,
                "flags": 0,
                "start": 8,
                "end": 22
            },
            "flags": 16,
            "start": 0,
            "end": 23
        }
    ],
    "isModule": false,
    "source": "type a = (1,2, x) => T;\n",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 24
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

