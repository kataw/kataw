# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default async function *f(){} foo
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default async function *f(){} foo",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 1837075,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 31,
                        "end": 32
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 34
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
                            "start": 35,
                            "end": 35
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 34,
                        "end": 36
                    },
                    "typeParameters": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 264,
                    "start": 14,
                    "end": 36
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 36
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
                    "start": 36,
                    "end": 40
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 36,
                "end": 40
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 40
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 40
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

