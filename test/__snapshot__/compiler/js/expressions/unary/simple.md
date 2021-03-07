# Kataw parser test case

## Input

`````js
!a;
+b;

typeof x;
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "!a;\n+b;\n\ntypeof x;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "!",
                    "operand": {
                        "kind": 196712,
                        "text": "a",
                        "rawText": "a",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 1,
                        "end": 2
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 2
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 3
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "+",
                    "operand": {
                        "kind": 196712,
                        "text": "b",
                        "rawText": "b",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 5,
                        "end": 6
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 3,
                    "end": 6
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 3,
                "end": 7
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65774,
                    "operator": "typeof",
                    "operand": {
                        "kind": 196712,
                        "text": "x",
                        "rawText": "x",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 17
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 7,
                    "end": 17
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 7,
                "end": 18
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 18
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 18
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

