# Kataw parser test case

## Input

`````js
type A = {
  ...( /* comment 1 */ B  /* comment 1 */  )
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
                            "kind": 247,
                            "protoKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 65,
                                "start": 10,
                                "end": 16
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 144,
                                        "id": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 17,
                                            "end": 35
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 16,
                                        "end": 35
                                    },
                                    "flags": 2097152,
                                    "start": 16,
                                    "end": 55
                                },
                                "flags": 2097152,
                                "start": 16,
                                "end": 55
                            },
                            "staticToken": null,
                            "flags": 2097152,
                            "start": 10,
                            "end": 55
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 8,
                    "end": 57
                },
                "flags": 2097152,
                "start": 8,
                "end": 57
            },
            "flags": 2097152,
            "start": 0,
            "end": 57
        }
    ],
    "isModule": false,
    "source": "type A = {\n  ...( /* comment 1 */ B  /* comment 1 */  )\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 57
}
```

### Printed

```javascript


```

### Diagnostics

```javascript
✔ No errors
```

