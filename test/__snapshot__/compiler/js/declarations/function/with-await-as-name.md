# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
function await() {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "function await() {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "await",
                    "rawText": "await",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 8,
                    "end": 14
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [],
                    "trailingComma": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 15,
                    "end": 16
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
                        "start": 18,
                        "end": 18
                    },
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 16,
                    "end": 19
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 256,
                "start": 0,
                "end": 19
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
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

