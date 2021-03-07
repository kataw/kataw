# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async function f(){} foo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default async function f(){} foo",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 1312785,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 29,
                        "end": 31
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 32,
                        "end": 33
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
                            "start": 34,
                            "end": 34
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 35
                    },
                    "typeParameters": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 260,
                    "start": 14,
                    "end": 35
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 35
            },
            {
                "kind": 2097233,
                "expression": {
                    "kind": 196712,
                    "text": "foo",
                    "rawText": "foo",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 35,
                    "end": 39
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 35,
                "end": 39
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 39
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 39
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

