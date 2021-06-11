# Kataw parser test case

## Input

`````js
type X = ((x?) => T);
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
                "text": "X",
                "rawText": "X",
                "flags": 96,
                "start": 4,
                "end": 6
            },
            "typeParameters": null,
            "type": {
                "kind": 260,
                "type": {
                    "kind": 261,
                    "arrowToken": {
                        "kind": 10,
                        "flags": 64,
                        "start": 14,
                        "end": 17
                    },
                    "parameters": {
                        "kind": 279,
                        "parameters": [
                            {
                                "kind": 149,
                                "ellipsisToken": null,
                                "name": {
                                    "kind": 134299649,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 96,
                                    "start": 11,
                                    "end": 12
                                },
                                "optionalToken": {
                                    "kind": 134217750,
                                    "flags": 64,
                                    "start": 12,
                                    "end": 13
                                },
                                "types": null,
                                "flags": 0,
                                "start": 10,
                                "end": 13
                            }
                        ],
                        "trailingComma": false,
                        "flags": 32,
                        "start": 10,
                        "end": 13
                    },
                    "returnType": {
                        "kind": 144,
                        "id": {
                            "kind": 134299649,
                            "text": "T",
                            "rawText": "T",
                            "flags": 96,
                            "start": 17,
                            "end": 19
                        },
                        "typeParameters": null,
                        "flags": 0,
                        "start": 17,
                        "end": 19
                    },
                    "typeParameters": null,
                    "flags": 0,
                    "start": 10,
                    "end": 19
                },
                "flags": 0,
                "start": 8,
                "end": 20
            },
            "flags": 16,
            "start": 0,
            "end": 21
        }
    ],
    "isModule": false,
    "source": "type X = ((x?) => T);",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 21
}
```

### Printed

```javascript

```

### Diagnostics

```javascript
✖ An optional parameter cannot be used without an ':' in an arrow function type parameter list - start: 10, end: 14

```

