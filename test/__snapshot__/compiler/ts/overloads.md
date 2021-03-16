# Kataw parser test case

## Options

`````js
{ jsx: false, disableWebCompat: true, module: true }
`````

## Input

`````js
export function f(x: number): number;
export function f(x: string): string;
`````

## Output

### Hybrid CST

```javascript
{
    "kind": 2243,
    "source": "export function f(x: number): number;\nexport function f(x: string): string;",
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
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 15,
                    "end": 17
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
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 18,
                                "end": 19
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202657,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 27
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 18,
                            "end": 27
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 18,
                    "end": 28
                },
                "type": {
                    "kind": 4202657,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 29,
                    "end": 36
                },
                "contents": null,
                "typeParameters": null,
                "flags": 32768,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 6,
                "end": 37
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 0,
            "end": 37
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
                    "symbol": null,
                    "transformFlags": 1025,
                    "start": 53,
                    "end": 55
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
                                "symbol": null,
                                "transformFlags": 1025,
                                "start": 56,
                                "end": 57
                            },
                            "isOptional": false,
                            "type": {
                                "kind": 4202702,
                                "flags": 0,
                                "symbol": null,
                                "transformFlags": 2097152,
                                "start": 58,
                                "end": 65
                            },
                            "initializer": null,
                            "decorators": null,
                            "accessModifier": null,
                            "isReadOnly": false,
                            "flags": 0,
                            "symbol": null,
                            "transformFlags": 1,
                            "start": 56,
                            "end": 65
                        }
                    ],
                    "trailingComma": false,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 0,
                    "start": 56,
                    "end": 66
                },
                "type": {
                    "kind": 4202702,
                    "flags": 0,
                    "symbol": null,
                    "transformFlags": 2097152,
                    "start": 67,
                    "end": 74
                },
                "contents": null,
                "typeParameters": null,
                "flags": 0,
                "symbol": null,
                "transformFlags": 2097152,
                "start": 44,
                "end": 75
            },
            "namedExports": null,
            "exportFromClause": null,
            "fromClause": null,
            "isTypeOnly": false,
            "flags": 32768,
            "symbol": null,
            "transformFlags": 0,
            "start": 37,
            "end": 75
        }
    ],
    "isModule": false,
    "printable": true,
    "diagnostics": [],
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 75
}
```

### Printed

```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics

```javascript

```

