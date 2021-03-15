# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Options

`````js
{ jsx: false, disableWebCompat: true }
`````

## Input

`````js
function f() {
  new.target = 1;
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function f() {\n  new.target = 1;\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 10
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 11,
                    "end": 12
                },
                "type": null,
                "contents": {
                    "kind": 91,
                    "functionStatementList": {
                        "kind": 94,
                        "statements": [
                            {
                                "kind": 2097233,
                                "expression": {
                                    "kind": 65550,
                                    "left": {
                                        "kind": 4194973,
                                        "name": {
                                            "kind": 196711,
                                            "text": "target",
                                            "rawText": "target",
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 21,
                                            "end": 27
                                        },
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 1,
                                        "start": 14,
                                        "end": 27
                                    },
                                    "operator": "=",
                                    "right": {
                                        "kind": 4261540,
                                        "text": 1,
                                        "rawText": "1",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 29,
                                        "end": 31
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 14,
                                    "end": 31
                                },
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 14,
                                "end": 32
                            }
                        ],
                        "multiline": true,
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 14,
                        "end": 32
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 12,
                    "end": 34
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 34
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 34
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 34
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

