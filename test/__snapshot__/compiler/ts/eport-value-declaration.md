# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export var a;
export function b() {}
export class C {}

export enum D {}
export namespace E {}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 149,
    "source": "export var a;\nexport function b() {}\nexport class C {}\n\nexport enum D {}\nexport namespace E {}",
    "filename": "",
    "moduleBody": {
        "kind": 150,
        "statements": [
            {
                "kind": 76,
                "declaration": {
                    "kind": 2097397,
                    "declarationList": {
                        "kind": 244,
                        "declarations": [
                            {
                                "kind": 243,
                                "binding": {
                                    "kind": 131102,
                                    "text": "a",
                                    "rawText": "a",
                                    "flags": 65536,
                                    "intersects": false,
                                    "transformFlags": 1025,
                                    "start": 10,
                                    "end": 12
                                },
                                "exclamation": false,
                                "type": null,
                                "initializer": null,
                                "flags": 10,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 65536,
                                "end": 12
                            }
                        ],
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 10,
                        "end": 12
                    },
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 6,
                    "end": 13
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 13
            },
            {
                "kind": 76,
                "declaration": {
                    "kind": 264284,
                    "name": {
                        "kind": 131102,
                        "text": "b",
                        "rawText": "b",
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
                            "start": 35,
                            "end": 35
                        },
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 0,
                        "start": 33,
                        "end": 36
                    },
                    "typeParameters": null,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 256,
                    "start": 20,
                    "end": 36
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 13,
                "end": 36
            },
            {
                "kind": 76,
                "declaration": {
                    "kind": 48,
                    "name": {
                        "kind": 131102,
                        "text": "C",
                        "rawText": "C",
                        "flags": 65536,
                        "intersects": false,
                        "transformFlags": 1025,
                        "start": 49,
                        "end": 51
                    },
                    "typeParameters": null,
                    "classHeritage": null,
                    "implementClauses": null,
                    "members": {
                        "kind": 50,
                        "elements": [],
                        "flags": 81920,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 53,
                        "end": 54
                    },
                    "decorators": null,
                    "isAbstract": false,
                    "flags": 81920,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 43,
                    "end": 54
                },
                "namedExports": null,
                "exportFromClause": null,
                "fromClause": null,
                "isTypeOnly": false,
                "flags": 81920,
                "intersects": false,
                "transformFlags": 0,
                "start": 36,
                "end": 54
            },
            {
                "kind": 8263,
                "name": {
                    "kind": 196712,
                    "text": "D",
                    "rawText": "D",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 67,
                    "end": 69
                },
                "members": {
                    "kind": 8265,
                    "enumMembersList": [],
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 71,
                    "end": 71
                },
                "isConst": false,
                "flags": 81952,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 62,
                "end": 72
            },
            {
                "kind": 2105597,
                "name": {
                    "kind": 196712,
                    "text": "E",
                    "rawText": "E",
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 89,
                    "end": 91
                },
                "body": {
                    "kind": 2105596,
                    "statements": [],
                    "multiline": false,
                    "flags": 65536,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 93,
                    "end": 93
                },
                "flags": 65568,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 79,
                "end": 94
            }
        ],
        "transformFlags": 0,
        "flags": 65536,
        "intersects": false,
        "start": 0,
        "end": 94
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 94
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

