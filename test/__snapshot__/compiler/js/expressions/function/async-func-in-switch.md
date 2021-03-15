# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
switch (x) {
  case foo:
    async function f(){}
}
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "switch (x) {\n  case foo:\n    async function f(){}\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2097362,
                "expression": {
                    "kind": 196712,
                    "text": "x",
                    "rawText": "x",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 8,
                    "end": 9
                },
                "caseBlock": {
                    "kind": 2093,
                    "clauses": [
                        {
                            "kind": 46,
                            "expression": {
                                "kind": 196712,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 65536,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 19,
                                "end": 23
                            },
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
                                        "start": 43,
                                        "end": 45
                                    },
                                    "formalParameters": {
                                        "kind": 90,
                                        "formalParameterList": [],
                                        "trailingComma": false,
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 46,
                                        "end": 47
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
                                            "start": 48,
                                            "end": 48
                                        },
                                        "flags": 81920,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 47,
                                        "end": 49
                                    },
                                    "typeParameters": null,
                                    "flags": 81920,
                                    "intersects": false,
                                    "transformFlags": 260,
                                    "start": 24,
                                    "end": 49
                                }
                            ],
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 12,
                            "end": 49
                        }
                    ],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 10,
                    "end": 51
                },
                "flags": 65536,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 51
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 51
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 51
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```
