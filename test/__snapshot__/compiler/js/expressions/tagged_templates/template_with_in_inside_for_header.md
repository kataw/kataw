# Kataw parser test case

## Input

`````js
for(t`${x in y}`;;);
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "for(t`${x in y}`;;);",
    "filename": "",
    "statements": [
        {
            "kind": 2099288,
            "initializer": {
                "kind": 66260,
                "member": {
                    "kind": 196712,
                    "text": "t",
                    "rawText": "t",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 4,
                    "end": 5
                },
                "typeArguments": null,
                "template": {
                    "kind": 66261,
                    "spans": [
                        {
                            "kind": 66263,
                            "rawText": "",
                            "text": "",
                            "expression": {
                                "kind": 65563,
                                "left": {
                                    "kind": 196712,
                                    "text": "x",
                                    "rawText": "x",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 8,
                                    "end": 9
                                },
                                "operator": "in",
                                "right": {
                                    "kind": 196712,
                                    "text": "y",
                                    "rawText": "y",
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 12,
                                    "end": 14
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 8,
                                "end": 14
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 5,
                            "end": 14
                        }
                    ],
                    "tail": {
                        "kind": 4260568,
                        "rawText": "",
                        "text": "",
                        "literal": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 14,
                        "end": 16
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 5,
                    "end": 16
                },
                "optional": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 1,
                "start": 5,
                "end": 16
            },
            "condition": null,
            "incrementor": null,
            "isVariableDeclarationList": false,
            "statement": {
                "kind": 6291526,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 19,
                "end": 20
            },
            "flags": 0,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 20
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
    "end": 20
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

