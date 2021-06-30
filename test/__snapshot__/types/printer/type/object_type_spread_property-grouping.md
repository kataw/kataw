# Kataw parser test case

## Input

`````js
type A = {
  ...( /* comment 1 */ B  /* comment 2 */  )
}

type A = {
  ...(

    /* comment 1 */

    B  /* comment 2 */  )
}


type A = {
  ...(

    /* comment 1 */

    B


    /* comment 2 */

    )
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
                "end": 4
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
                            "staticKeyword": null,
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
                                        "typeName": {
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
            "flags": 64,
            "start": 0,
            "end": 57
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 57,
                "end": 63
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 63,
                "end": 65
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 65,
                "end": 67
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
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 65,
                                "start": 69,
                                "end": 75
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 76,
                                            "end": 104
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 75,
                                        "end": 104
                                    },
                                    "flags": 2097152,
                                    "start": 75,
                                    "end": 124
                                },
                                "flags": 2097152,
                                "start": 75,
                                "end": 124
                            },
                            "flags": 2097152,
                            "start": 69,
                            "end": 124
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 67,
                    "end": 126
                },
                "flags": 2097152,
                "start": 67,
                "end": 126
            },
            "flags": 65,
            "start": 57,
            "end": 126
        },
        {
            "kind": 200,
            "declareToken": null,
            "typeToken": {
                "kind": 24775,
                "flags": 65,
                "start": 126,
                "end": 133
            },
            "name": {
                "kind": 134299649,
                "text": "A",
                "rawText": "A",
                "flags": 96,
                "start": 133,
                "end": 135
            },
            "typeParameters": null,
            "assignToken": {
                "kind": 4125,
                "flags": 64,
                "start": 135,
                "end": 137
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
                            "staticKeyword": null,
                            "ellipsisToken": {
                                "kind": 524302,
                                "flags": 65,
                                "start": 139,
                                "end": 145
                            },
                            "type": {
                                "kind": 139,
                                "bitwiseOrToken": null,
                                "bitwiseAndToken": null,
                                "type": {
                                    "kind": 290,
                                    "type": {
                                        "kind": 144,
                                        "typeName": {
                                            "kind": 134299649,
                                            "text": "B",
                                            "rawText": "B",
                                            "flags": 96,
                                            "start": 146,
                                            "end": 174
                                        },
                                        "typeParameters": null,
                                        "flags": 2097152,
                                        "start": 145,
                                        "end": 174
                                    },
                                    "flags": 2097152,
                                    "start": 145,
                                    "end": 203
                                },
                                "flags": 2097152,
                                "start": 145,
                                "end": 203
                            },
                            "flags": 2097152,
                            "start": 139,
                            "end": 203
                        }
                    ],
                    "trailingComma": false,
                    "flags": 2097152,
                    "start": 137,
                    "end": 205
                },
                "flags": 2097152,
                "start": 137,
                "end": 205
            },
            "flags": 65,
            "start": 126,
            "end": 205
        }
    ],
    "isModule": false,
    "source": "type A = {\n  ...( /* comment 1 */ B  /* comment 2 */  )\n}\n\ntype A = {\n  ...(\n\n    /* comment 1 */\n\n    B  /* comment 2 */  )\n}\n\n\ntype A = {\n  ...(\n\n    /* comment 1 */\n\n    B\n\n\n    /* comment 2 */\n\n    )\n}",
    "fileName": "__root__",
    "flags": 0,
    "start": 0,
    "end": 205
}
```

### Printed

```javascript

type A = { ...(/* comment 1 */B/* comment 2 */) }
type A = { ...(
 /* comment 1 */
B/* comment 2 */) }
type A = { ...(
 /* comment 1 */
B
 /* comment 2 */
) }

```

### Diagnostics

```javascript
✔ No errors
```

