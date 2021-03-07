# Kataw parser test case

## Input

`````js
function commentedParameters(
a /* parameter a */,
b /* parameter b */,
/* extra comment */
) { }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "function commentedParameters(\na /* parameter a */,\nb /* parameter b */,\n/* extra comment */\n) { }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "commentedParameters",
                    "rawText": "commentedParameters",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 28
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "a",
                                "rawText": "a",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 29,
                                "end": 31
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 29,
                            "end": 31
                        },
                        {
                            "kind": 89,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "b",
                                "rawText": "b",
                                "flags": 16384,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 50,
                                "end": 52
                            },
                            "isOptional": false,
                            "type": null,
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 50,
                            "end": 52
                        }
                    ],
                    "trailingComma": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 29,
                    "end": 93
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [],
                        "multiline": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 95,
                        "end": 95
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 93,
                    "end": 97
                },
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 97
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 97
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 97
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

