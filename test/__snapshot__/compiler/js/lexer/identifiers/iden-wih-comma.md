# Kataw parser test case

## Input

`````js
foo, bar, zoo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo, bar, zoo",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65590,
                    "expressions": [
                        {
                            "kind": 196712,
                            "text": "foo",
                            "rawText": "foo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        {
                            "kind": 196712,
                            "text": "bar",
                            "rawText": "bar",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 8
                        },
                        {
                            "kind": 196712,
                            "text": "zoo",
                            "rawText": "zoo",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 9,
                            "end": 13
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 13
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 13
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

