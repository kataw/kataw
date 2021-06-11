# Kataw parser test case

## Input

`````js
type A = (...Array<string>) => void
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
                "text": "A",
                "rawText": "A",
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
                    "start": 27,
                    "end": 30
                },
                "parameters": {
                    "kind": 208,
                    "parameters": [
                        {
                            "kind": 149,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 64,
                                "start": 10,
                                "end": 13
                            },
                            "name": null,
                            "optionalToken": null,
                            "types": {
                                "kind": 144,
                                "id": {
                                    "kind": 134299649,
                                    "text": "Array",
                                    "rawText": "Array",
                                    "flags": 96,
                                    "start": 13,
                                    "end": 18
                                },
                                "typeParameters": {
                                    "kind": 266,
                                    "parameters": [
                                        {
                                            "kind": 267,
                                            "type": {
                                                "kind": 134234347,
                                                "flags": 64,
                                                "start": 19,
                                                "end": 25
                                            },
                                            "flags": 0,
                                            "start": 19,
                                            "end": 25
                                        }
                                    ],
                                    "flags": 0,
                                    "start": 18,
                                    "end": 26
                                },
                                "flags": 0,
                                "start": 13,
                                "end": 26
                            },
                            "flags": 0,
                            "start": 10,
                            "end": 26
                        }
                    ],
                    "trailingComma": false,
                    "flags": 32,
                    "start": 10,
                    "end": 26
                },
                "returnType": {
                    "kind": 138477615,
                    "flags": 64,
                    "start": 30,
                    "end": 35
                },
                "typeParameters": null,
                "flags": 0,
                "start": 10,
                "end": 35
            },
            "flags": 16,
            "start": 0,
            "end": 35
        }
    ],
    "isModule": false,
    "source": "type A = (...Array<string>) => void",
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
✔ No errors
```

