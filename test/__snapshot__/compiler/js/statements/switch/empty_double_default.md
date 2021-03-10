# Kataw parser test case

## Input

`````js
switch(x) { default: default: }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "switch(x) { default: default: }",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 8
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [
                        {
                            "kind": 65,
                            "statements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 11,
                            "end": 20
                        },
                        {
                            "kind": 65,
                            "statements": [],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 20,
                            "end": 29
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 9,
                    "end": 31
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
