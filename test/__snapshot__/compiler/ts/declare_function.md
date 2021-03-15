# Kataw parser test case

## Options

`````js
{ jsx: true, disableWebCompat: true, module: true }
`````

## Input

`````js
declare function fn(
  currentRequest: {a: number},
  // TODO this is a very very very very long comment that makes it go > 80 columns
): number;

declare function /* foo */ f( /* baz */ a /* taz */) /* bar */;
`````

## Output

### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "declare function fn(\n  currentRequest: {a: number},\n  // TODO this is a very very very very long comment that makes it go > 80 columns\n): number;\n\ndeclare function /* foo */ f( /* baz */ a /* taz */) /* bar */;",
    "filename": "",
    "statements": [
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "fn",
                "rawText": "fn",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 16,
                "end": 19
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "currentRequest",
                            "rawText": "currentRequest",
                            "flags": 32768,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 20,
                            "end": 37
                        },
                        "isOptional": false,
                        "type": {
                            "kind": 536879334,
                            "objectTypeMembers": {
                                "kind": 536871081,
                                "members": [
                                    {
                                        "kind": 8380,
                                        "name": {
                                            "kind": 196711,
                                            "text": "a",
                                            "rawText": "a",
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 0,
                                            "start": 40,
                                            "end": 41
                                        },
                                        "isOptional": false,
                                        "accessModifier": null,
                                        "type": {
                                            "kind": 4202657,
                                            "flags": 0,
                                            "intersects": false,
                                            "transformFlags": 2097152,
                                            "start": 42,
                                            "end": 49
                                        },
                                        "isStatic": false,
                                        "isReadOnly": false,
                                        "initializer": null,
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 2097152,
                                        "start": 40,
                                        "end": 49
                                    }
                                ],
                                "multiline": false,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 40,
                                "end": 50
                            },
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 2097152,
                            "start": 38,
                            "end": 50
                        },
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 20,
                        "end": 50
                    }
                ],
                "trailingComma": true,
                "flags": 32768,
                "intersects": false,
                "transformFlags": 0,
                "start": 20,
                "end": 136
            },
            "type": {
                "kind": 4202657,
                "flags": 0,
                "intersects": false,
                "transformFlags": 2097152,
                "start": 137,
                "end": 144
            },
            "contents": null,
            "typeParameters": null,
            "flags": 402685952,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 7,
            "end": 145
        },
        {
            "kind": 264284,
            "name": {
                "kind": 131102,
                "text": "f",
                "rawText": "f",
                "flags": 0,
                "intersects": false,
                "transformFlags": 1025,
                "start": 163,
                "end": 175
            },
            "formalParameters": {
                "kind": 90,
                "formalParameterList": [
                    {
                        "kind": 16473,
                        "ellipsis": false,
                        "binding": {
                            "kind": 131102,
                            "text": "a",
                            "rawText": "a",
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1025,
                            "start": 176,
                            "end": 188
                        },
                        "isOptional": false,
                        "type": null,
                        "initializer": null,
                        "decorators": null,
                        "accessModifier": null,
                        "isReadOnly": false,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 176,
                        "end": 188
                    }
                ],
                "trailingComma": false,
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 176,
                "end": 199
            },
            "type": null,
            "contents": null,
            "typeParameters": null,
            "flags": 402653184,
            "intersects": false,
            "transformFlags": 2097152,
            "start": 154,
            "end": 210
        }
    ],
    "isModule": true,
    "printable": true,
    "diagnostics": [],
    "intersects": false,
    "original": null,
    "symbol": null,
    "flags": 0,
    "transformFlags": 0,
    "start": 0,
    "end": 210
}
```

  
### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

  
### Diagnostics


```javascript

```

