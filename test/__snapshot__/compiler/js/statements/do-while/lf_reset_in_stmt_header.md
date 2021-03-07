# Kataw parser test case

## Input

`````js
do
  if(x=>{});
while(y)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do\n  if(x=>{});\nwhile(y)",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097218,
                "expression": {
                    "kind": 196712,
                    "text": "y",
                    "rawText": "y",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 22,
                    "end": 23
                },
                "statement": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 67592,
                        "typeParameters": null,
                        "arrowParameters": {
                            "kind": 65545,
                            "elements": [
                                {
                                    "kind": 89,
                                    "ellipsis": false,
                                    "binding": {
                                        "kind": 4325406,
                                        "text": "x",
                                        "rawText": "x",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 8,
                                        "end": 9
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
                                    "start": 9,
                                    "end": 9
                                }
                            ],
                            "type": null,
                            "accessModifier": null,
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 8,
                            "end": 9
                        },
                        "contents": {
                            "kind": 91,
                            "functionStatementList": {
                                "kind": 94,
                                "statements": [],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 12,
                                "end": 12
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 13
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 8,
                        "end": 13
                    },
                    "consequent": {
                        "kind": 6291526,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 15
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 15
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 24
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 24
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 24
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

