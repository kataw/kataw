# Kataw parser test case

## Input

`````js
foo;bar;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "foo;bar;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 3
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 4
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "bar",
                    "rawText": "bar",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 7
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 4,
                "end": 8
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 8
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 8
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

