# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
async function f(){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "async function f(){}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 1312785,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
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
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 20
                },
                "typeParameters": null,
                "flags": 65536,
                "intersects": false,
                "transformFlags": 260,
                "start": 0,
                "end": 20
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 20
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
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

