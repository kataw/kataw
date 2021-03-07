# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
declare namespace d3 {
  export function select(selector: string): Selection<any>;
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "declare namespace d3 {\n  export function select(selector: string): Selection<any>;\n}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 2105597,
                "name": {
                    "kind": 196712,
                    "text": "d3",
                    "rawText": "d3",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 17,
                    "end": 20
                },
                "body": {
                    "kind": 2105596,
                    "statements": [
                        {
                            "kind": 76,
                            "declaration": {
                                "kind": 264284,
                                "name": {
                                    "kind": 131102,
                                    "text": "select",
                                    "rawText": "select",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 40,
                                    "end": 47
                                },
                                "formalParameters": {
                                    "kind": 90,
                                    "formalParameterList": [
                                        {
                                            "kind": 89,
                                            "ellipsis": false,
                                            "binding": {
                                                "kind": 131102,
                                                "text": "selector",
                                                "rawText": "selector",
                                                "flags": 65536,
                                                "intersects": false,
                                                "transformFlags": 1025,
                                                "start": 48,
                                                "end": 56
                                            },
                                            "isOptional": false,
                                            "type": {
                                                "kind": 4202702,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 57,
                                                "end": 64
                                            },
                                            "initializer": null,
                                            "decorators": null,
                                            "accessModifier": null,
                                            "isReadOnly": false,
                                            "flags": 65536,
                                            "intersects": false,
                                            "transformFlags": 1,
                                            "start": 48,
                                            "end": 64
                                        }
                                    ],
                                    "trailingComma": false,
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 0,
                                    "start": 48,
                                    "end": 65
                                },
                                "type": {
                                    "kind": 8428,
                                    "typeName": {
                                        "kind": 196711,
                                        "text": "Selection",
                                        "rawText": "Selection",
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 0,
                                        "start": 66,
                                        "end": 76
                                    },
                                    "typeArguments": {
                                        "kind": 8419,
                                        "typeArgumentsList": [
                                            {
                                                "kind": 4202498,
                                                "flags": 0,
                                                "intersects": false,
                                                "transformFlags": 2097152,
                                                "start": 77,
                                                "end": 80
                                            }
                                        ],
                                        "flags": 65536,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 77,
                                        "end": 80
                                    },
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 2097152,
                                    "start": 66,
                                    "end": 82
                                },
                                "contents": null,
                                "typeParameters": null,
                                "flags": 81920,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 31,
                                "end": 82
                            },
                            "namedExports": null,
                            "exportFromClause": null,
                            "fromClause": null,
                            "isTypeOnly": false,
                            "flags": 81920,
                            "intersects": false,
                            "transformFlags": 0,
                            "start": 22,
                            "end": 82
                        }
                    ],
                    "multiline": true,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 22,
                    "end": 82
                },
                "flags": 201392128,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 84
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 84
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 84
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

