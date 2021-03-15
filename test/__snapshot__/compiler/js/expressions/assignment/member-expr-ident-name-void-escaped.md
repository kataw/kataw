# Kataw parser test case

## Input

`````js
obj.voi\u0064 = 42;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "obj.voi\\u0064 = 42;",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 65550,
                    "left": {
                        "kind": 66232,
                        "member": {
                            "kind": 196712,
                            "text": "obj",
                            "rawText": "obj",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 0,
                            "end": 3
                        },
                        "expression": {
                            "kind": 196711,
                            "text": "void",
                            "rawText": "voi\\u0064",
                            "flags": 37748736,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 4,
                            "end": 13
                        },
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 3,
                        "end": 13,
                        "period": {
                            "kind": 254,
                            "pos": 3,
                            "end": 4
                        }
                    },
                    "operator": "=",
                    "right": {
                        "kind": 4261540,
                        "text": 42,
                        "rawText": "42",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 15,
                        "end": 18
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 18
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 19
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 19
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

