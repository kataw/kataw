# Kataw parser test case

> Auto-generated tests to validate error recovery
>

### Cases

> `````js
> a = 0;
> `````

> `````js
> a = 0; b
> `````

> `````js
> a = 0; b(){}
> `````

> `````js
> a; b(){}
> `````

> `````js
> ['a'] = 0; ['b'](){}
> `````

> `````js
> ['a'];
> `````

> `````js
> ['a']; b;
> `````

> `````js
> ['a']; ['b'](){}
> `````

> `````js
> 0 = 0;
> `````

> `````js
> c = [c] = c
> `````

> `````js
> a = 0\n
> `````

> `````js
> a\n b(){}
> `````

> `````js
> a\n ['b'](){}
> `````

> `````js
> ['a']\n *b(){}
> `````

> `````js
> get\n *a(){}
> `````

> `````js
> a\n get
> `````

> `````js
> yield\n a
> `````

> `````js
> async = 0
> `````

> `````js
> async\n a(){}
> `````

> `````js
> async\n a
> `````

> `````js
> await;
> `````

> `````js
> await = 0;
> `````

> `````js
> await\n a
> `````

> `````js
> async *#a() { }
> `````

> `````js
> #a() { } #b() {}
> `````

> `````js
> get #a() { } get #b() {} set #a(foo) {} set #b(foo) {}
> `````

> `````js
> #a() { } static a() {}
> `````

> `````js
> #a() { } a() {} static a() {}
> `````

> `````js
> #a() { } get #b() {}
> `````

> `````js
> #a(...args) { }
> `````

> `````js
> #a(a = 1) { }
> `````

> `````js
> get #a() { }
> `````

> `````js
> set #a(a = (...args) => {}) { }
> `````

> `````js
> #a = 0;
> `````

> `````js
> get #get() {}
> `````

> `````js
> set #await(test) {}
> `````

> `````js
> set #arguments(test) {}
> `````

> `````js
> async #set() {}
> `````

> `````js
> *#static() {}
> `````

> `````js
> *#async() {}
> `````

> `````js
> async *#await() {}
> `````

> `````js
> async *#get() {}
> `````

> `````js
> async *#arguments() {}
> `````

> `````js
> #b = 1;set #a(foo) { }
> `````

> `````js
> #b = 1;get #a() { }
> `````

> `````js
> a;#a() { }
> `````

> `````js
> a;set #a(foo) { }
> `````

> `````js
> a;*#a() { }
> `````

> `````js
> a = 1;get #a() { }
> `````

> `````js
> #a = 0\n #b(){}
> `````

> `````js
> #a\n *#b(){}
> `````

> `````js
> #a = 0\n get #b(){}
> `````

> `````js
> b = 0\n #b(){}
> `````

> `````js
> b = 0\n get #b(){}
> `````

> `````js
> b\n *#b(){}
> `````

### Templates

#### expression_paren

`````js
(class { # });
`````

#### declaration_paren

`````js
(class extends Base { # });
`````

#### declaration

`````js
class C { # }
`````

#### expression

`````js
class C extends Base { # }
`````

## Output


### Hybrid CST


```javascript
{
    "kind": 196,
    "source": "(class { # });",
    "filename": "",
    "scriptBody": {
        "kind": 197,
        "statements": [
            {
                "kind": 2097233,
                "expression": {
                    "kind": 66224,
                    "expression": {
                        "kind": 82483,
                        "name": null,
                        "typeParameters": null,
                        "classHeritage": null,
                        "implementClauses": null,
                        "members": {
                            "kind": 50,
                            "elements": [
                                {
                                    "kind": 84,
                                    "key": {
                                        "kind": 131252,
                                        "text": "#",
                                        "rawText": "class",
                                        "flags": 0,
                                        "intersects": false,
                                        "transformFlags": 524288,
                                        "start": 8,
                                        "end": 10
                                    },
                                    "isInKeyword": false,
                                    "expression": null,
                                    "isAbstract": false,
                                    "isReadOnly": false,
                                    "isOptional": false,
                                    "exclamation": false,
                                    "type": null,
                                    "initializer": null,
                                    "decorators": null,
                                    "accessModifier": null,
                                    "isStatic": false,
                                    "flags": 0,
                                    "intersects": false,
                                    "transformFlags": 524352,
                                    "start": 8,
                                    "end": 10
                                }
                            ],
                            "flags": 0,
                            "intersects": false,
                            "transformFlags": 1,
                            "start": 8,
                            "end": 12
                        },
                        "decorators": null,
                        "flags": 0,
                        "intersects": false,
                        "transformFlags": 1,
                        "start": 1,
                        "end": 12
                    },
                    "flags": 0,
                    "intersects": false,
                    "transformFlags": 0,
                    "start": 0,
                    "end": 13
                },
                "flags": 0,
                "intersects": false,
                "transformFlags": 0,
                "start": 0,
                "end": 14
            }
        ],
        "transformFlags": 0,
        "flags": 0,
        "intersects": false,
        "start": 0,
        "end": 14
    },
    "jsx": false,
    "printable": true,
    "diagnostics": [
        {
            "kind": 2,
            "source": 0,
            "message": "Invalid character",
            "start": 10,
            "length": 1
        }
    ],
    "incremental": false,
    "flags": 0,
    "intersects": false,
    "transformFlags": 0,
    "start": 0,
    "end": 14
}
```

### Printed


```javascript
@{x2716}@ Soon to be open sourced
```

### Diagnostics


```javascript

```

