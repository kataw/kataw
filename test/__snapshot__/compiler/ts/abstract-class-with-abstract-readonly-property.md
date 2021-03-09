# Kataw parser test case

## Input

`````js
abstract class Foo {
  public abstract readonly foo = 'string';
}
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "abstract class Foo {\n  public abstract readonly foo = 'string';\n}",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 48,
                "name": {
                    "kind": 131102,
                    "text": "Foo",
                    "rawText": "Foo",
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1025,
                    "start": 14,
                    "end": 18
                },
                "typeParameters": null,
                "classHeritage": null,
                "implementClauses": null,
                "members": {
                    "kind": 50,
                    "elements": [
                        {
                            "kind": 84,
                            "key": {
                                "kind": 196711,
                                "text": "foo",
                                "rawText": "foo",
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 47,
                                "end": 51
                            },
                            "isAbstract": true,
                            "isReadOnly": true,
                            "isOptional": false,
                            "exclamation": false,
                            "type": null,
                            "initializer": {
                                "kind": 4261583,
                                "text": "string",
                                "rawText": "string",
                                "flags": 16777216,
                                "intersects": false,
                                "transformFlags": 0,
                                "start": 53,
                                "end": 62
                            },
                            "decorators": null,
                            "accessModifier": {
                                "kind": 4194494,
                                "flags": 0,
                                "intersects": false,
                                "transformFlags": 2097152,
                                "start": 20,
                                "end": 29
                            },
                            "isStatic": false,
                            "flags": 16384,
                            "intersects": false,
                            "transformFlags": 524352,
                            "start": 20,
                            "end": 63
                        }
                    ],
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 1,
                    "start": 20,
                    "end": 65
                },
                "decorators": null,
                "isAbstract": true,
                "flags": 268435456,
                "intersects": false,
                "transformFlags": 2097153,
                "start": 8,
                "end": 65
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 65
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 65
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

