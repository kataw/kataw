# Kataw parser test case

## Input

`````js
type A = {
  [B]: /* comment 1 */ (C /* comment 2 */ )
}
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
                "text": "A",
                "rawText": "A",
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
                "kind": 139,
                "bitwiseOrToken": null,
                "bitwiseAndToken": null,
                "type": {
                    "kind": 134234353,
                    "properties": [
                        {
                            "kind": 195,
                            "protoKeyword": null,
                            "staticToken": null,
                            "name": null,
                            "key": {
                                "kind": 144,
                                "name": {
                                    "kind": 134299649,
                                    "text": "B",
                                    "rawText": "B",
                                    "flags": 96,
                                    "start": 14,
                                    "end": 15
                                },
                                "typeParameters": null,
                                "flags": 2097152,
                                "start": 10,
                                "end": 15
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 144,
                                        "name": {
                                            "kind": 134299649,
                                            "text": "C",
                                            "rawText": "C",
                                            "flags": 96,
                                            "start": 35,
                                            "end": 36
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 17,
                                        "end": 36
                                    },
                                    "flags": 2097152,
                                    "start": 17,
                                    "end": 54
                                },
                                "flags": 2097152,
                                "start": 17,
                                "end": 54
                            },
                            "flags": 2097152,
                            "start": 10,
                            "end": 54
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 56
                },
                "flags": 2097152,
                "start": 8,
                "end": 56
            },
            "flags": 2097152,
            "start": 0,
            "end": 56
        }
    ],
    "isModule": false,
    "source": "type A = {\n  [B]: /* comment 1 */ (C /* comment 2 */ )\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 56
}
```

### Printed

```javascript

 type A =  
```

### Diagnostics

```javascript
✔ No errors
```

