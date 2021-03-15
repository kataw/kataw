# Kataw parser test case

## Input

`````js
Observable.empty<never>();
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "Observable.empty<never>();",
    "filename": "",
    "statements": [
        {
            "kind": 2097233,
            "expression": {
                "kind": 1073807915,
                "expression": {
                    "kind": 67175096,
                    "member": {
                        "kind": 196712,
                        "text": "Observable",
                        "rawText": "Observable",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 0,
                        "end": 10
                    },
                    "expression": {
                        "kind": 196711,
                        "text": "empty",
                        "rawText": "empty",
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 11,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 16,
                    "period": {
                        "kind": 255,
                        "pos": 10,
                        "end": 11
                    }
                },
                "typeArguments": {
                    "kind": 8419,
                    "typeArgumentsList": [
                        {
                            "kind": 4202651,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 17,
                            "end": 22
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 17,
                    "end": 23
                },
                "argumentList": {
                    "kind": 3,
                    "elements": [],
                    "trailingComma": false,
                    "transformFlags": 0,
                    "flags": 0,
                    "intersects": false,
                    "start": 24,
                    "end": 24
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 16,
                "end": 25
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 26
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 26
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

