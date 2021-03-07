# Kataw parser test case

## Input

`````js
do if(8)function s(){}
while(y)
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "do if(8)function s(){}\nwhile(y)",
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
                    "start": 29,
                    "end": 30
                },
                "statement": {
                    "kind": 2097257,
                    "expression": {
                        "kind": 4261540,
                        "text": 8,
                        "rawText": "8",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 6,
                        "end": 7
                    },
                    "consequent": {
                        "kind": 264284,
                        "name": {
                            "kind": 131102,
                            "text": "s",
                            "rawText": "s",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 16,
                            "end": 18
                        },
                        "formalParameters": {
                            "kind": 90,
                            "formalParameterList": [],
                            "trailingComma": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 19,
                            "end": 20
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
                                "start": 21,
                                "end": 21
                            },
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 22
                        },
                        "typeParameters": null,
                        "flags": 16384,
                        "intersects": false,
                        "transformFlags": 256,
                        "start": 8,
                        "end": 22
                    },
                    "alternate": null,
                    "isWebCompat": true,
                    "flags": 16384,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 2,
                    "end": 22
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 31
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 31
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 31
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

