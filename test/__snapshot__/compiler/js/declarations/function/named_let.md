# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
{
  function let(){}
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "{\n  function let(){}\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2099237,
                "block": {
                    "kind": 2084,
                    "statements": [
                        {
                            "kind": 264284,
                            "name": {
                                "kind": 131102,
                                "text": "let",
                                "rawText": "let",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 12,
                                "end": 16
                            },
                            "formalParameters": {
                                "kind": 90,
                                "formalParameterList": [],
                                "trailingComma": false,
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 17,
                                "end": 18
                            },
                            "type": null,
                            "contents": {
                                "kind": 91,
                                "functionStatementList": {
                                    "kind": 94,
                                    "statements": [],
                                    "multiline": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 19,
                                    "end": 19
                                },
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 18,
                                "end": 20
                            },
                            "typeParameters": null,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 256,
                            "start": 1,
                            "end": 20
                        }
                    ],
                    "multiline": true,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 1,
                    "end": 20
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 22
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 22
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 22
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

