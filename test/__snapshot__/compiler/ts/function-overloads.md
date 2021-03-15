# Kataw parser test case

## Input

`````js

export function f(x: number): number;
export function f(x: string): string;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "\nexport function f(x: number): number;\nexport function f(x: string): string;",
    "filename": "",
    "statements": [
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 16,
                    "end": 18
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 19,
                                "end": 20
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 21,
                                "end": 28
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 19,
                            "end": 28
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 19,
                    "end": 29
                },
                "type": {
                    "kind": 4202657,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 30,
                    "end": 37
                },
                "contents": null,
                "typeParameters": null,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 7,
                "end": 38
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 0,
            "end": 38
        },
        {
            "kind": 76,
            "declaration": {
                "kind": 264284,
                "name": {
                    "kind": 131102,
                    "text": "f",
                    "rawText": "f",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 54,
                    "end": 56
                },
                "formalParameters": {
                    "kind": 90,
                    "formalParameterList": [
                        {
                            "kind": 16473,
                            "ellipsis": false,
                            "binding": {
                                "kind": 131102,
                                "text": "x",
                                "rawText": "x",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 1025,
                                "start": 57,
                                "end": 58
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 59,
                                "end": 66
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 57,
                            "end": 66
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 57,
                    "end": 67
                },
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 2097152,
                    "start": 68,
                    "end": 75
                },
                "contents": null,
                "typeParameters": null,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 45,
                "end": 76
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32769,
            "intersects": false,
            "transformFlags": 0,
            "start": 38,
            "end": 76
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 76
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

