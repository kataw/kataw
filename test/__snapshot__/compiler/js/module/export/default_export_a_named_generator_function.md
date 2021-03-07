# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
export default function* f(){}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export default function* f(){}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 77,
                "declaration": {
                    "kind": 788576,
                    "name": {
                        "kind": 131102,
                        "text": "f",
                        "rawText": "f",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 24,
                        "end": 26
                    },
                    "formalParameters": {
                        "kind": 90,
                        "formalParameterList": [],
                        "trailingComma": false,
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 27,
                        "end": 28
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
                            "start": 29,
                            "end": 29
                        },
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 28,
                        "end": 30
                    },
                    "typeParameters": null,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 384,
                    "start": 14,
                    "end": 30
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 30
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 30
    },
    "jsx": true,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 30
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

